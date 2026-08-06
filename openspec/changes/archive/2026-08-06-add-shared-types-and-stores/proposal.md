# Proposal: Add Shared Types and Stores

## Why

Every later feature — the Total Warfare engine, the Alpha Strike engine, the
turn wizard, roster screens — depends on a common `GameState` shape and a
persistence mechanism that knows which parts of a game survive between turns
and which don't. Building that foundation first, with no UI attached, lets it
be fully covered by unit tests and lets every subsequent change assume it
already exists rather than re-deriving it.

This also closes a gap between the codebase and `openspec/specs/architecture/spec.md`:
Zustand is documented there as the state library but isn't yet a project
dependency, and none of the `engine/shared` or `stores/` structure described
in that spec exists on disk.

## What Changes

- Add `zustand` as a project dependency.
- Add `engine/shared/types.ts`: the common `Ruleset` union, `NamedModifier`,
  `ToHitResult`, and the `GameState` discriminated union
  (`TotalWarfareGame | AlphaStrikeGame`) as described in the architecture spec.
  Ruleset-specific unit shapes (`TWUnit`, `ASUnit`) are stubbed as minimal
  placeholder types for now — fleshing them out belongs to the engine changes
  that actually consume them. There is no separate `Pilot` type: the game
  doesn't maintain a roster of pilots that could be reassigned between units
  across games, so pilot skill is just a `skill` field on the unit itself.
- Add `stores/gameStore.ts`: persistent game state (ruleset, units — each
  carrying its own pilot skill), wrapped in Zustand's `persist` middleware,
  writing to `localStorage` under a versioned envelope
  (`{ schemaVersion, data }`).
- Add `stores/turnStore.ts`: ephemeral per-turn state, with a `resetTurn()`
  action that clears it back to defaults.
- Unit tests for both stores: persistence round-trips, `resetTurn()` behavior,
  and that turn state is never included in the persisted envelope.

## Non-goals

- No ruleset-specific engine logic (modifier tables, `calculateToHit`) —
  that's the `add-tw-movement-range-tables` change and its Alpha Strike
  counterpart.
- No UI, routing, or Storybook components — this change is store/type layer
  only.
- No schema migration logic beyond establishing `schemaVersion: 1` as the
  starting point. Writing an actual migration function has no value until
  there's a `schemaVersion: 2` to migrate from.
- No fleshing-out of `TWUnit`/`ASUnit` beyond the minimal fields needed to
  prove the discriminated union and persistence work end-to-end (`id`,
  `name`, `skill`). Full unit shapes belong to their respective engine
  changes.
- No optional/advanced BattleTech rule modules.

## Impact

- `package.json`: adds `zustand` dependency.
- New files under `src/engine/shared/` and `src/stores/`.
- No existing files change behavior; `App.tsx` is untouched by this change.
