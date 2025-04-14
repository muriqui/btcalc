/**
 * @file Global type and interface definitions.
 */

/**
 * Reducer actions for data operations.
 */
export enum DataAction {
  Add = "add",
  Update = "update",
  Delete = "delete",
}

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
  NotStarted = "",
  Movement = "movement",
  Combat = "combat",
  Weapons = "weapons",
  Physical = "physical",
  End = "end",
}

/**
 * Describes a unit ('Mech, vehicle, etc.).
 */
export interface UnitInterface {
  id: string;
  name?: string;
  destroyed?: boolean;
  immobile?: boolean;
}

/**
 * Describes an Alpha Strike player's unit.
 */
export interface ASPlayerInterface extends UnitInterface {
  skill?: number;
  heat?: number;
  fireControlHits?: number;
}

/**
 * Describes an Alpha Strike opponent's unit.
 */
export interface ASOpponentInterface extends UnitInterface {
  tmm?: number;
  mpHits?: number;
  stl?: boolean;
}

/**
 * Describes a Total Warfare player's unit.
 */
export interface TWPlayerInterface extends UnitInterface {
  gunnery?: number;
}

/**
 * Describes a Total Warfare opponent's unit.
 */
export type TWOpponentInterface = UnitInterface;
