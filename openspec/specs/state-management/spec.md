# State Management

## Purpose

Defines how in-progress game state is represented, persisted, and reset
across the app's two rulesets. Establishes the split between persistent
game state (survives closing and reopening the browser) and ephemeral
per-turn state (reset at the end of every turn) described in
`openspec/specs/architecture/spec.md`.

## Requirements

### Requirement: Game state is represented as a ruleset-discriminated union
The system SHALL represent an in-progress game as a `GameState` value that is
a discriminated union on a `ruleset` field (`"totalWarfare"` |
`"alphaStrike"`), so that ruleset-specific unit data (including each unit's
pilot skill) can never be mixed into a game of the other ruleset.

#### Scenario: Starting a Total Warfare game
- **WHEN** a player starts a new game with ruleset `totalWarfare`
- **THEN** the resulting `GameState` has `ruleset: "totalWarfare"` and an
  empty `units` array typed as `TWUnit[]`

#### Scenario: Starting an Alpha Strike game
- **WHEN** a player starts a new game with ruleset `alphaStrike`
- **THEN** the resulting `GameState` has `ruleset: "alphaStrike"` and an
  empty `units` array typed as `ASUnit[]`

### Requirement: Persistent game state survives a browser reload
The system SHALL persist the current `GameState` to `localStorage` such that
closing and reopening the browser restores the same game in progress.

#### Scenario: Resuming after a reload
- **WHEN** a game has been started and the store has written its state
- **AND** a new store instance is created (simulating a page reload)
- **THEN** the new store instance's `game` value matches the previously
  persisted `GameState`

### Requirement: A game can be cleared
The system SHALL provide a way to discard the current persisted game
entirely.

#### Scenario: Clearing an existing game
- **WHEN** `clearGame()` is called on a store with an existing persisted game
- **THEN** the persisted entry is removed from `localStorage`
- **AND** the store's `game` value becomes `null`

### Requirement: Per-turn state is ephemeral and never persisted
The system SHALL keep per-turn condition state (movement, terrain, range,
and similar inputs collected during the turn wizard) separate from
persistent game state, and SHALL never write it to `localStorage`.

#### Scenario: Resetting turn state at end of turn
- **WHEN** turn state has been mutated during a turn
- **AND** `resetTurn()` is called
- **THEN** the turn store's state returns to its documented initial defaults

#### Scenario: Turn state never touches storage
- **WHEN** any turn store action is called
- **THEN** `localStorage.setItem` is never invoked as a result
