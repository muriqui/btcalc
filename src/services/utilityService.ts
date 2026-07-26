/**
 * @file Utility functions.
 */

import { System, Step } from "../types";

/**
 * Describes a unit ('Mech, vehicle, etc.).
 */
export interface UnitInterface {
  /** The unit's UUID. */
  id: string;
  /** The unit name. */
  name: string;
  /** Whether the unit has been destroyed. */
  destroyed?: boolean;
  /** Whether the unit is currently immobilized. */
  immobile?: boolean;
}

/**
 * @returns A universally unique identifier.
 */
export const uuid = () => crypto.randomUUID();

/**
 * A string prepended to all local storage keys belonging to this app.
 */
const PREFIX = "btcalc.";

/**
 * Gets a value from local storage.
 * @param key The key to retrieve from local storage.
 * @param defaultValue The value to return instead if the key does not exist.
 * @returns The locally stored value for the given key, or the default value if there is no value for that key.
 */
export function getStorage<T>(key: string, defaultValue: T): T {
  const saved = localStorage.getItem(`${PREFIX}${key}`);
  return typeof saved === "string" ? (JSON.parse(saved) as T) : defaultValue;
}

/**
 * Sets a value in local storage.
 * @param key The key to use for storing the value in local storage.
 * @param value The value to store.
 */
export function setStorage(key: string, value: unknown) {
  localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value));
}

/**
 * Clears all local storage keys belonging to this app.
 *
 * This allows us to clear all app data without clearing everything for the
 * domain, as would happen with localStorage.clear().
 */
export function clearStorage() {
  // Find all keys that start with the app prefix.
  const keysToDelete = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith(PREFIX)) {
      // Deleting the item now would shorten the list while it's being iterated
      // and cause some keys to be missed, so keep track and then delete below.
      keysToDelete.push(key);
    }
  }
  // Clear any keys we found.
  keysToDelete.forEach((key) => localStorage.removeItem(key));
}

/**
 * @returns The current game system.
 */
export function getSystem(): Promise<System | undefined> {
  return new Promise((resolve) => {
    const system = getStorage("system", undefined);
    resolve(system);
  });
}

/**
 * Sets the current game system.
 */
export function setSystem(system: System) {
  setStorage("system", system);
}

/**
 * @returns The current calculator step.
 */
export function getStep(): Promise<Step | undefined> {
  return new Promise((resolve) => {
    const step = getStorage("step", undefined);
    resolve(step);
  });
}

/**
 * Sets the current calculator step.
 */
export function setStep(step: Step) {
  setStorage("step", step);
}

/**
 * @returns The player's unit list.
 */
export function getPlayerUnits(): Promise<UnitInterface[]> {
  return new Promise((resolve) => {
    const units = getStorage("player", []);
    resolve(units);
  });
}

/**
 * Gets a player unit.
 * @param id A player unit ID.
 * @returns The player unit, if it exists.
 */
export async function getPlayerUnit(
  id: string,
): Promise<UnitInterface | undefined> {
  const units = await getPlayerUnits();
  return units.find((unit) => unit.id === id);
}

/**
 * Sets the player's unit list.
 * @param units The player's unit list.
 */
export function setPlayerUnits(units: UnitInterface[]) {
  setStorage("player", units);
}

/**
 * Adds a unit to the player's unit list.
 * @param unit A player unit.
 */
export async function addPlayerUnit(unit: UnitInterface) {
  const units = await getPlayerUnits();
  setPlayerUnits([...units, unit]);
}

/**
 * Updates a unit in the player's unit list.
 * @param unit A player unit.
 */
export async function updatePlayerUnit(unit: UnitInterface) {
  const units = await getPlayerUnits();
  setPlayerUnits(
    units.map((currentUnit) =>
      currentUnit.id === unit.id ? unit : currentUnit,
    ),
  );
}

/**
 * Deletes a unit from the player's unit list.
 * @param id A player unit ID.
 */
export async function deletePlayerUnit(id: string) {
  const units = await getPlayerUnits();
  setPlayerUnits(units.filter((unit) => unit.id !== id));
}

/**
 * @returns The opponent's unit list.
 */
export function getOpponentUnits(): Promise<UnitInterface[]> {
  return new Promise((resolve) => {
    const units = getStorage("opponent", []);
    resolve(units);
  });
}

/**
 * Gets an opponent unit.
 * @param id An opponent unit ID.
 * @returns The opponent unit, if it exists.
 */
export async function getOpponentUnit(
  id: string,
): Promise<UnitInterface | undefined> {
  const units = await getOpponentUnits();
  return units.find((unit) => unit.id === id);
}

/**
 * Sets the opponent's unit list.
 * @param units The opponent's unit list.
 */
export function setOpponentUnits(units: UnitInterface[]) {
  setStorage("opponent", units);
}

/**
 * Adds a unit to the opponent's unit list.
 * @param unit An opponent unit.
 */
export async function addOpponentUnit(unit: UnitInterface) {
  const units = await getOpponentUnits();
  setOpponentUnits([...units, unit]);
}

/**
 * Updates a unit in the opponent's unit list.
 * @param unit An opponent unit.
 */
export async function updateOpponentUnit(unit: UnitInterface) {
  const units = await getOpponentUnits();
  setOpponentUnits(
    units.map((currentUnit) =>
      currentUnit.id === unit.id ? unit : currentUnit,
    ),
  );
}

/**
 * Deletes a unit from the opponent's unit list.
 * @param id An opponent unit ID.
 */
export async function deleteOpponentUnit(id: string) {
  const units = await getOpponentUnits();
  setOpponentUnits(units.filter((unit) => unit.id !== id));
}
