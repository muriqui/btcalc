# Baseline Architecture Spec — BattleTech To-Hit Calculator

## Purpose

A responsive, single-page web app that serves as a player aid for the BattleTech
tabletop wargame. It walks a player through a short question-and-answer flow
each turn to determine the target number needed to hit with each weapon,
replacing manual lookups against the printed reference card.

The app supports two BattleTech rulesets, chosen once at game setup:

- **Total Warfare** (Classic BattleTech): hex-map play, individual weapons,
  heat tracking, range measured in hexes.
- **Alpha Strike**: faster tabletop play on model terrain, abstracted
  Damage/Armor/Structure values, range measured in inches.

The app is **not** a full record-sheet or unit-card replacement. It collects
only the minimum data needed to distinguish units and compute a target
number: unit name, pilot skill, current heat (Total Warfare), and
damage/status effects that modify the roll (e.g. actuator damage). It does
not track full armor diagrams, criticals, or other bookkeeping unrelated to
the to-hit calculation.

## Non-goals (explicit scope boundaries)

- Not a full record sheet / unit card replacement.
- Not tracking armor-by-location, critical hit tables, or full damage
  bookkeeping.
- Not implementing optional/advanced rule modules (indirect fire, physical
  attacks, C3 networks, etc.) in the initial build. These may be added later
  as additive engine tables without restructuring existing types.
- No server/backend. Fully client-side, static hosting only.
- No user accounts. A single in-progress game persists per browser via
  `localStorage`.

## Deployment target

- Static hosting on GitHub Pages.
- Build via Vite; deploy `dist/` through a GitHub Actions workflow
  (lint → test → build → deploy).
- No server-side routing available, so client-side routing must not depend
  on server rewrite rules (see Routing, below).

## Technology stack

| Concern            | Choice                     | Rationale                                                                                                     |
| ------------------ | -------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Language           | TypeScript                 | Compile-time safety over rules/modifier data and calculations                                                 |
| Framework          | React + Vite               | Mature pairing with Storybook's Vite builder; fast dev loop; strong GitHub Pages support                      |
| Styling            | Tailwind CSS               | Utility-first, mobile-first; fits a control-heavy single page used at the table                               |
| Component workshop | Storybook (Vite builder)   | Build/test UI components in isolation from live game state                                                    |
| State management   | Zustand                    | Minimal boilerplate; `persist` middleware maps directly onto the persistent/ephemeral state split             |
| Routing            | React Router, `HashRouter` | GitHub Pages serves static files with no rewrite rules; hash routing avoids needing a 404-redirect workaround |
| Unit testing       | Vitest                     | Shares config/tooling with Vite                                                                               |
| Component testing  | React Testing Library      | Standard pairing with Vitest for interaction tests                                                            |
| E2E testing        | Playwright                 | Full-flow tests (setup → turn → end turn → resume)                                                            |
| Spec/AI workflow   | OpenSpec                   | Propose → apply → archive change workflow per feature                                                         |

## Core architectural principle: engine/store/UI separation

The rules engine is pure, framework-free TypeScript with no dependency on
React or any store. It takes structured "conditions" data and returns a
target number breakdown. This is the part that must be provably correct
against the rulebook, and is built test-first.

```
src/
  engine/
    shared/
      types.ts          # NamedModifier, ToHitResult, Pilot — genuinely common shapes
    totalWarfare/
      types.ts          # TW unit/weapon/conditions types
      tables/            # movement, range, terrain, heat modifier tables
      calculateToHit.ts
    alphaStrike/
      types.ts           # AS unit/conditions types (inches, TMM, Damage S/M/L)
      tables/
      calculateToHit.ts
  stores/
    gameStore.ts         # persistent state (Zustand + persist middleware)
    turnStore.ts         # ephemeral per-turn state, reset each turn
  routes/
    Landing.tsx
    RulesetChoice.tsx
    RequireGame.tsx       # guard: redirects if no matching persisted game
    totalWarfare/ (Setup.tsx, Turn.tsx, Roster.tsx)
    alphaStrike/  (Setup.tsx, Turn.tsx, Roster.tsx)
  components/
    shared/
      Wizard/             # step container, progress, modifier breakdown display
      controls/           # generic Tailwind primitives (Slider, Toggle, Stepper)
    totalWarfare/steps/    # MovementStep, TerrainStep, RangeStep, etc.
    alphaStrike/steps/
  stories/                 # Storybook stories per component
```

**Do not** force Total Warfare and Alpha Strike into a single unified `Unit`
or `ShotConditions` type, or behind a shared generic engine interface, unless
a concrete need for polymorphism emerges. The two rulesets share workflow
shape (setup → per-turn Q&A → target number) but differ enough in underlying
data that a forced-common abstraction would fit neither well.

## Ruleset modeling

`Ruleset` is a string literal union (`'totalWarfare' | 'alphaStrike'`).
`GameState` is a discriminated union on `ruleset`, chosen once at game setup
and fixed for the life of that saved game:

```ts
type GameState = TotalWarfareGame | AlphaStrikeGame;
```

This lets TypeScript narrow unit/conditions types automatically based on
`gameState.ruleset`, and makes it structurally impossible to mix a Total
Warfare unit into an Alpha Strike game.

## Modifier table design

Each modifier category (attacker movement, target movement, range bracket,
terrain, heat, etc.) is a standalone, independently testable lookup —
either a `Record<...>` constant or a small pure function — rather than
conditional logic embedded in the calculation function. These tables _are_
the spec: test cases are written directly from the rulebook's own worked
examples before the calculation function that composes them exists.

The `calculateToHit` function for each ruleset composes its tables into a
`ToHitResult`:

```ts
interface NamedModifier {
  label: string;
  value: number;
}
interface ToHitResult {
  baseTarget: number;
  modifiers: NamedModifier[]; // full breakdown, not just a final number
  total: number;
  isImpossible: boolean;
}
```

Returning a breakdown (not just a number) is a deliberate UX decision: new
players should be able to see _why_ their target number is what it is.

An `otherModifiers: NamedModifier[]` escape hatch on each ruleset's
conditions type allows situational/optional-rule modifiers to be added
without reshaping the core conditions type.

## State persistence

- Two Zustand stores: `gameStore` (persistent — units, pilots, damage/heat
  that carries across turns) and `turnStore` (ephemeral — this turn's
  movement, terrain, range inputs; cleared by an explicit `resetTurn()`
  action at end of turn).
- `gameStore` persists to `localStorage` via Zustand's `persist` middleware.
- The persisted envelope is versioned from the start:
  ```ts
  interface PersistedGame {
    schemaVersion: number;
    data: GameState;
  }
  ```
  Migrations branch on `ruleset` before applying version-specific
  transforms, so a Total Warfare migration doesn't need to know Alpha
  Strike exists, and vice versa.

## Routing

- `HashRouter`, no server-side rewrite dependency.
- `ruleset` is a URL path segment (`total-warfare` | `alpha-strike`), not
  just store state — enables route-level code splitting via `React.lazy` so
  a player using one ruleset never loads the other's step components.
- The turn wizard is a single route (`/:ruleset/turn`); wizard step position
  is local component state, not encoded in the URL, to keep end-of-turn
  reset behavior simple and avoid fighting the browser back button.
- `/:ruleset/setup` (first-time roster entry) and `/:ruleset/roster`
  (mid-game roster view/edit — heat, damage, add/remove units) are separate
  routes despite sharing underlying form components, since they have
  different surrounding flow/chrome.
- A `RequireGame` wrapper guards `/turn` and `/roster`: redirects to `/new`
  if there's no persisted game matching the route's `ruleset` param. This
  keeps the "ruleset fixed at creation" invariant enforced at the routing
  layer, not just the type layer.

## Testing strategy (TDD / spec-driven)

1. Modifier tables and lookup functions: unit tests against rulebook worked
   examples, written before implementation.
2. `calculateToHit` per ruleset: tests against full worked examples
   ("Gunnery 4, stationary, target moved 5 hexes, medium range through
   light woods → target number 9").
3. Shared components (`Wizard`, controls): built and reviewed in Storybook
   in isolation, using mock store state, before wiring into the full app.
4. Component interaction tests: React Testing Library.
5. End-to-end: Playwright, at minimum one full playthrough per ruleset
   (setup → play a turn → end turn → verify persistent state survived and
   turn state reset → close/reopen browser → resume).

## Development process

- Feature work is proposed and implemented via OpenSpec changes
  (`openspec/changes/<change-name>/`: proposal, specs, design, tasks),
  sized to fit a single work session (~2 hours) where possible.
- Each change's `proposal.md` scope section should explicitly state what
  is _not_ included, particularly around optional/advanced BattleTech rules,
  to prevent scope creep during implementation.
- `openspec/specs/` is treated as the living source of truth for
  architecture and requirements, kept in sync via archiving completed
  changes rather than left to drift from the implemented code.
