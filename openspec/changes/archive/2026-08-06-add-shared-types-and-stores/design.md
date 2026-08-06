# Design: Add Shared Types and Stores

## Type definitions

```ts
// src/engine/shared/types.ts

export type Ruleset = "totalWarfare" | "alphaStrike";

export interface NamedModifier {
  label: string;
  value: number;
}

export interface ToHitResult {
  baseTarget: number;
  modifiers: NamedModifier[];
  total: number;
  isImpossible: boolean;
}

// Minimal placeholder unit shapes. Full fields (weapons, heat, armor status
// for TW; Damage/Armor/Structure/Specials for AS) are added by the engine
// changes that consume them — kept minimal here so the discriminated union
// and persistence layer can be proven out without guessing at fields no
// code needs yet.
//
// There is no separate Pilot entity: the game doesn't track a roster of
// pilots that could be reassigned between units across games, so pilot
// skill is just a field on the unit itself. `skill` is Gunnery in Total
// Warfare and Skill in Alpha Strike — same slot, ruleset gives it meaning.
interface UnitBase {
  id: string;
  name: string;
  skill: number;
}

export interface TWUnit extends UnitBase {}

export interface ASUnit extends UnitBase {}

export interface TotalWarfareGame {
  ruleset: "totalWarfare";
  units: TWUnit[];
}

export interface AlphaStrikeGame {
  ruleset: "alphaStrike";
  units: ASUnit[];
}

export type GameState = TotalWarfareGame | AlphaStrikeGame;
```

## Persistence envelope

```ts
export interface PersistedGame {
  schemaVersion: number;
  data: GameState;
}
```

`schemaVersion` starts at `1`. No migration function is written yet — there's
nothing to migrate from until a `schemaVersion: 2` shape exists. The field is
present now so the very first persisted game already has it, avoiding an
"un-versioned legacy save" case to special-case later.

## gameStore

Zustand store wrapped in `persist` middleware, storage key `btcalc-game`.
Exposes:

- `game: GameState | null` — `null` before setup is complete.
- `startGame(ruleset: Ruleset)` — initializes an empty `GameState` for the
  chosen ruleset. (Roster entry itself is out of scope; this just creates the
  empty container a later `add-tw-setup-flow` change will populate.)
- `clearGame()` — drops the persisted game entirely (used by "New Game" when
  a game already exists — the confirm-overwrite UX itself belongs to a
  routing/UI change, not this one).

The `persist` middleware's `partialize` is configured to persist the whole
store shape as-is (`game` is the only field), keeping the envelope in the
shape described above under the hood via a custom `storage` serializer:

```ts
storage: createJSONStorage(() => localStorage, {
  reviver: undefined,
  replacer: undefined,
}),
version: 1,
```

Using Zustand's own `version` option (rather than hand-rolling the envelope)
is deliberate: it gives us the versioned-save invariant from the architecture
spec without reinventing what `persist` already does. `migrate` is left as
the identity function for `version: 1`; future ruleset-aware migrations plug
in here without touching store consumers.

## turnStore

Zustand store, **not** wrapped in `persist` — ephemeral by design.

- Holds whatever ruleset-agnostic scaffold fields exist today (this change
  doesn't yet know the shape of `TWShotConditions`/`ASShotConditions`, since
  those belong to the engine changes). For now it exposes just:
  - `resetTurn(): void` — resets the store to its initial empty state.
- Structured so that later changes add fields to the store's state shape and
  to `resetTurn()`'s reset object in the same place, without restructuring
  the store itself.

## Testing approach

- `gameStore.test.ts`: start a game for each ruleset, confirm `localStorage`
  contains the expected envelope shape after a `set`, confirm a fresh store
  instance rehydrates from a pre-seeded `localStorage` entry, confirm
  `clearGame()` removes the persisted key.
- `turnStore.test.ts`: confirm `resetTurn()` returns the store to its initial
  state, confirm nothing in `turnStore` ever touches `localStorage` (spy on
  `localStorage.setItem` and assert it's never called by turnStore actions).
- No component tests or Storybook stories — no components exist yet in this
  change.
