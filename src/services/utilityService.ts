/**
 * @file Utility functions.
 */

import { type OpponentInterface, Step, type UnitInterface } from "../types";

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
 * Gets the current calculator step asynchronously, for use in route loaders.
 * @returns The current step.
 */
export function getStep(): Promise<Step> {
  return new Promise((resolve) => {
    const step = getStorage("step", Step.NotStarted);
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
 * Gets the player's unit list asynchronously, for use in route loaders.
 * @returns The unit list.
 */
export function getUnits(): Promise<UnitInterface[]> {
  return new Promise((resolve) => {
    const units = getStorage("units", []);
    resolve(units);
  });
}

/**
 * Sets the player's unit list.
 * @param units The player's unit list.
 */
export function setUnits(units: UnitInterface[]) {
  setStorage("units", units);
}

/**
 * Gets the opponent's unit list asynchronously, for use in route loaders.
 * @returns The opponent's unit list.
 */
export function getOpponents(): Promise<OpponentInterface[]> {
  return new Promise((resolve) => {
    const opponents = getStorage("opponents", []);
    resolve(opponents);
  });
}

/**
 * Set the opponent's unit list.
 * @param opponents The opponent's unit list.
 */
export function setOpponents(opponents: OpponentInterface[]) {
  setStorage("opponents", opponents);
}
