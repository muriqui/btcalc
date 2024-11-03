/**
 * @file Global type and interface definitions.
 */

/**
 * Reducer actions for CRUD operations.
 */
export enum crudAction {
  Add = "add",
  Update = "update",
  Delete = "delete",
}

/**
 * Describes a player's unit.
 */
export interface unitInterface {
  id: string;
  name?: string;
  gunnery?: number;
}

/**
 * Describes an opponent's unit.
 */
export interface opponentInterface {
  id: string;
  name?: string;
}
