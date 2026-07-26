/**
 * @file Global type definitions.
 */

/**
 * Defines the supported game systems.
 */
export enum System {
  AlphaStrike = "alpha-strike",
  TotalWarfare = "total-warfare",
}

/**
 * The main steps of using the calculator, corresponding to phases of a turn.
 */
export enum Step {
  // Steps shared by both systems.
  Setup = "setup",
  Movement = "movement",
  End = "end",
  // Alpha Strike steps.
  Combat = "combat",
  // Total Warfare steps.
  Weapons = "weapons",
  Physical = "physical",
}
