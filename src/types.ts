/**
 * @file Global type and interface definitions.
 */

/**
 * Reducer actions for CRUD operations.
 */
export enum CrudAction {
  Add = "add",
  Update = "update",
  Delete = "delete",
}

/**
 * Describes a player's unit.
 */
export interface UnitInterface {
  id: string;
  name?: string;
  gunnery?: number;
}

/**
 * Describes an opponent's unit.
 */
export interface OpponentInterface {
  id: string;
  name?: string;
}

/**
 * The main steps of using the calculator; these correspond to routes under /play.
 */
export enum Step {
  NotStarted = "",
  Movement = "movement",
  SelectTargets = "targets",
  ResolveWeapons = "weapons",
}
