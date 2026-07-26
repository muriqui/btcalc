/**
 * @file Functions for managing a Total Warfare game.
 */

import {
  type UnitInterface,
  addOpponentUnit,
  addPlayerUnit,
  getOpponentUnit,
  getOpponentUnits,
  getPlayerUnit,
  getPlayerUnits,
  updateOpponentUnit,
  updatePlayerUnit,
  uuid,
} from "./utilityService";

export const maxNameLength = 32;
export const minGunnery = 0;
export const maxGunnery = 7;

/**
 * Describes a Total Warfare player unit.
 */
export interface TWPlayerInterface extends UnitInterface {
  /** The unit's gunnery skill. */
  gunnery: number;
}

/**
 * Checks whether a given unit has the required properties for a Total Warfare player unit.
 * @param unit The unit.
 * @returns True if the unit has all required properties for TWPlayerInterface.
 */
function isTWPlayerUnit(unit: UnitInterface): unit is TWPlayerInterface {
  return (unit as TWPlayerInterface).gunnery !== undefined;
}

/**
 * Gets a list of a Total Warfare player's units.
 * @returns The player's units, filtered to only valid Total Warfare units.
 */
export async function getTWPlayerUnits(): Promise<TWPlayerInterface[]> {
  const units = await getPlayerUnits();
  return units.filter((unit) => isTWPlayerUnit(unit));
}

/**
 * Gets a TotalWarfare player unit.
 * @param id A player unit ID.
 * @returns The player unit, if it exists and is a valid Total Warfare unit.
 */
export async function getTWPlayerUnit(
  id: string,
): Promise<TWPlayerInterface | null> {
  const unit = await getPlayerUnit(id);
  return unit && isTWPlayerUnit(unit) ? unit : null;
}

/**
 * Validates field value contraints on a Total Warfare player unit.
 */
function validateTWPlayerUnit(unit: TWPlayerInterface) {
  // Validate the unit name.
  if (unit.name.length < 1) {
    throw new Error("Unit name cannot be empty.");
  } else if (unit.name.length > maxNameLength) {
    throw new Error(
      `Unit name cannot be longer than ${maxNameLength} characters.`,
    );
  }

  // Validate the gunnery skill number.
  if (
    isNaN(unit.gunnery) ||
    !Number.isInteger(unit.gunnery) ||
    unit.gunnery < minGunnery ||
    unit.gunnery > maxGunnery
  ) {
    throw new Error(
      `Gunnery skill must be an integer (${minGunnery} to ${maxGunnery}).`,
    );
  }
}

/**
 * Adds a new Total Warfare player unit.
 * @param newUnit The values to set for the new unit, excluding the ID.
 */
export async function addTWPlayerUnit(newUnit: Omit<TWPlayerInterface, "id">) {
  const unit = {
    id: uuid(),
    ...newUnit,
  } satisfies TWPlayerInterface;
  validateTWPlayerUnit(unit);
  await addPlayerUnit(unit);
}

/**
 * Updates a Total Warfare player unit.
 * @param unit The player unit.
 */
export async function updateTWPlayerUnit(unit: TWPlayerInterface) {
  validateTWPlayerUnit(unit);
  await updatePlayerUnit(unit);
}

/**
 * Describes a Total Warfare opponent's unit.
 */
export type TWOpponentInterface = UnitInterface;

/**
 * Checks whether a given unit conforms to the Total Warfare opponent unit interface.
 * @param unit The unit.
 * @return True if the unit conforms to TWOpponentInterface.
 */
function isTWOpponentUnit(unit: UnitInterface): unit is TWOpponentInterface {
  // This is always true (for now) because TWOpponentInterface is the same as UnitInterface.
  return unit.name !== undefined;
}

/**
 * Gets a list of a Total Warfare opponent's units.
 * @returns The opponent's units, filtered to only valid Total Warfare units.
 */
export async function getTWOpponentUnits(): Promise<TWOpponentInterface[]> {
  const units = await getOpponentUnits();
  return units.filter((unit) => isTWOpponentUnit(unit));
}

/**
 * Gets a Total Warfare opponent unit.
 * @param id An opponent unit ID.
 * @returns The opponent unit, if it exists and is a valid Total Warfare unit.
 */
export async function getTWOpponentUnit(
  id: string,
): Promise<TWOpponentInterface | null> {
  const unit = await getOpponentUnit(id);
  return unit && isTWOpponentUnit(unit) ? unit : null;
}

/**
 * Validates the field value constraints on a Total Warfare opponent unit.
 */
function validateTWOpponentUnit(unit: TWOpponentInterface) {
  // Validate the opponent name.
  if (unit.name.length < 1) {
    throw new Error("Unit name cannot be empty.");
  } else if (unit.name.length > maxNameLength) {
    throw new Error(
      `Unit name cannot be longer than ${maxNameLength} characters.`,
    );
  }
}

/**
 * Adds a new Total Warfare opponent unit.
 * @param newUnit The values to set for the new unit, excluding the ID.
 */
export async function addTWOpponentUnit(
  newUnit: Omit<TWOpponentInterface, "id">,
) {
  const unit = {
    id: uuid(),
    ...newUnit,
  } satisfies TWOpponentInterface;
  validateTWOpponentUnit(unit);
  await addOpponentUnit(unit);
}

/**
 * Updates a Total Warfare opponent unit.
 * @param unit The opponent unit.
 */
export async function updateTWOpponentUnit(unit: TWOpponentInterface) {
  validateTWOpponentUnit(unit);
  await updateOpponentUnit(unit);
}
