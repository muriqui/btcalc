/**
 * @file Functions for managing an Alpha Strike game.
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
export const minSkill = 0;
export const maxSkill = 7;
export const minTMM = 0;
export const maxTMM = 5;

/**
 * Describes an Alpha Strike player unit.
 */
export interface ASPlayerInterface extends UnitInterface {
  /** The unit's skill rating. */
  skill: number;
  /** Is the unit jump-capable? */
  jump: boolean;
  /** The unit's current heat scale. */
  heat?: number;
  /** The number of fire control critical hits the unit has taken. */
  fireControlHits?: number;
}

/**
 * Checks whether a given unit has the required properties for an Alpha Strike player unit.
 * @param unit The unit.
 * @returns True if the unit has all required properties for ASPlayerInterface.
 */
function isASPlayerUnit(unit: UnitInterface): unit is ASPlayerInterface {
  return (
    (unit as ASPlayerInterface).skill !== undefined &&
    (unit as ASPlayerInterface).jump !== undefined
  );
}

/**
 * Gets a list of an Alpha Strike player's units.
 * @returns The player's units, filtered to only valid Alpha Strike units.
 */
export async function getASPlayerUnits(): Promise<ASPlayerInterface[]> {
  const units = await getPlayerUnits();
  return units.filter((unit) => isASPlayerUnit(unit));
}

/**
 * Gets an Alpha Strike player unit.
 * @param id A player unit ID.
 * @returns The player unit, if it exists and is a valid Alpha Strike unit.
 */
export async function getASPlayerUnit(
  id: string,
): Promise<ASPlayerInterface | null> {
  const unit = await getPlayerUnit(id);
  return unit && isASPlayerUnit(unit) ? unit : null;
}

/**
 * Validates field value constraints on an Alpha Strike player unit.
 */
async function validateASPlayerUnit(unit: ASPlayerInterface) {
  // Validate the unit name.
  if (unit.name.length < 1) {
    throw new Error("Unit name cannot be empty.");
  } else if (unit.name.length > maxNameLength) {
    throw new Error(
      `Unit name cannot be longer than ${maxNameLength} characters.`,
    );
  }

  // All player units must have unique names.
  const units = await getASPlayerUnits();
  const sameName = units.find(
    (compareUnit) =>
      compareUnit.name === unit.name && compareUnit.id !== unit.id,
  );
  if (sameName) {
    throw new Error(
      `There is already a player unit named ${unit.name}. Please give this unit a unique name.`,
    );
  }

  // Validate the skill rating.
  if (
    isNaN(unit.skill) ||
    !Number.isInteger(unit.skill) ||
    unit.skill < minSkill ||
    unit.skill > maxSkill
  ) {
    throw new Error(
      `Skill rating must be an integer (${minSkill} to ${maxSkill}).`,
    );
  }
}

/**
 * Adds a new Alpha Strike player unit.
 * @param newUnit The values to set for the new unit, excluding the ID.
 */
export async function addASPlayerUnit(newUnit: Omit<ASPlayerInterface, "id">) {
  const unit = {
    id: uuid(),
    ...newUnit,
  } satisfies ASPlayerInterface;
  await validateASPlayerUnit(unit);
  await addPlayerUnit(unit);
}

/**
 * Updates an Alpha Strike player unit.
 * @param unit The player unit.
 */
export async function updateASPlayerUnit(unit: ASPlayerInterface) {
  await validateASPlayerUnit(unit);
  await updatePlayerUnit(unit);
}

/**
 * Describes an Alpha Strike opponent's unit.
 */
export interface ASOpponentInterface extends UnitInterface {
  /** The unit's target movement modifier. */
  tmm: number;
  /** Is the unit jump-capable? */
  jump: boolean;
  /** The unit's target movement modifier when jumping, if different. */
  jumpTmm?: number;
  /** Does this unit have the stealth ability? */
  stl: boolean;
  /** How many movement point critical hits the unit has taken. */
  mpHits?: number;
}

/**
 * Checks whether a given unit conforms to the Alpha Strike opponent unit interface.
 * @param unit The unit.
 * @return True if the unit conforms to ASOpponentInterface.
 */
function isASOpponentUnit(unit: UnitInterface): unit is ASOpponentInterface {
  return (
    (unit as ASOpponentInterface).tmm !== undefined &&
    (unit as ASOpponentInterface).jump !== undefined &&
    (unit as ASOpponentInterface).stl !== undefined
  );
}

/**
 * Gets a list of an Alpha Strike opponent's units.
 * @returns The opponent's units, filtered to only valid Alpha Strike units.
 */
export async function getASOpponentUnits(): Promise<ASOpponentInterface[]> {
  const units = await getOpponentUnits();
  return units.filter((unit) => isASOpponentUnit(unit));
}

/**
 * Gets an Alpha Strike opponent unit.
 * @param id An opponent unit ID.
 * @returns The opponent unit, if it exists and is a valid Alpha Strike unit.
 */
export async function getASOpponentUnit(
  id: string,
): Promise<ASOpponentInterface | null> {
  const unit = await getOpponentUnit(id);
  return unit && isASOpponentUnit(unit) ? unit : null;
}

/**
 * Validates field value constraints on an Alpha Strike opponent unit.
 */
async function validateASOpponentUnit(unit: ASOpponentInterface) {
  // Validate the unit name.
  if (unit.name.length < 1) {
    throw new Error("Unit name cannot be empty.");
  } else if (unit.name.length > maxNameLength) {
    throw new Error(
      `Unit name cannot be longer than ${maxNameLength} characters.`,
    );
  }

  // All opponent units must have unique names.
  const units = await getASOpponentUnits();
  const sameName = units.find(
    (compareUnit) =>
      compareUnit.name === unit.name && compareUnit.id !== unit.id,
  );
  if (sameName) {
    throw new Error(
      `There is already an opposing unit named ${unit.name}. Please give this unit a unique name.`,
    );
  }

  // Validate the TMM.
  if (
    isNaN(unit.tmm) ||
    !Number.isInteger(unit.tmm) ||
    unit.tmm < minTMM ||
    unit.tmm > maxTMM
  ) {
    throw new Error(`TMM must be an integer (${minTMM} to ${maxTMM}).`);
  }
}

/**
 * Adds a new Alpha Strike opponent unit.
 * @param newUnit The values to set for the new unit, excluding the ID.
 */
export async function addASOpponentUnit(
  newUnit: Omit<ASOpponentInterface, "id">,
) {
  const unit = {
    id: uuid(),
    ...newUnit,
  } satisfies ASOpponentInterface;
  await validateASOpponentUnit(unit);
  await addOpponentUnit(unit);
}

/**
 * Updates an Alpha Strike opponent unit.
 * @param unit The opponent unit.
 */
export async function updateASOpponentUnit(unit: ASOpponentInterface) {
  await validateASOpponentUnit(unit);
  await updateOpponentUnit(unit);
}
