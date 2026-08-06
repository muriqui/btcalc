# Tasks: Add Shared Types and Stores

Each section is scoped to fit comfortably within a single ~2 hour session.

## 1. Shared types

- [x] Add `src/engine/shared/types.ts` with `Ruleset`, `NamedModifier`,
      `ToHitResult`, placeholder `TWUnit`/`ASUnit` (each carrying its own
      `skill` field — no separate `Pilot` type), `TotalWarfareGame`/
      `AlphaStrikeGame`, and the `GameState` union.
- [x] Add `src/engine/shared/types.test.ts` with compile-time-only checks
      (e.g. a test that constructs one of each game shape and asserts
      `ruleset` narrows `units` to the correct type) to guard against future
      accidental type-shape drift.

## 2. Dependency setup

- [x] Add `zustand` to `package.json` dependencies.
- [x] Confirm `npm install` succeeds and `npm run build` still passes with
      no new type errors.

## 3. gameStore

- [x] Add `src/stores/gameStore.ts`: `game`, `startGame(ruleset)`,
      `clearGame()`, wrapped in `persist` with `version: 1` per design.md.
- [x] Write failing tests first in `src/stores/gameStore.test.ts`: - starting a Total Warfare game produces `game.ruleset === "totalWarfare"`
      with an empty `units` array - starting an Alpha Strike game produces the Alpha Strike shape - after `startGame`, a fresh store instance (simulating a page reload)
      rehydrates the same `game` value from `localStorage` - `clearGame()` removes the persisted entry and resets `game` to `null`
- [x] Implement `gameStore.ts` until tests pass.

## 4. turnStore

- [x] Write failing tests first in `src/stores/turnStore.test.ts`: - initial state matches the documented defaults - after mutating store state, `resetTurn()` returns it to defaults - no turnStore action ever calls `localStorage.setItem`
      (spy-based assertion)
- [x] Add `src/stores/turnStore.ts` with `resetTurn()` until tests pass.

## 5. Wrap-up

- [x] Run full test suite (`npm run test` or equivalent Vitest script) —
      all green.
- [x] Run `npm run lint` — no new errors.
- [x] Confirm no Storybook stories are needed for this change (no components
      were added).
- [x] Ready for `/opsx:archive` — no delta spec sync needed beyond the one
      under `specs/state-management/spec.md` in this change.
