import { useEffect, useReducer, useState } from "react";

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
 * Acts like useState, but the state is also saved in local storage.
 * @param key The key to use for saving the state in local storage.
 * @param initialState The initial state value to use if the key does not exist
 *   in local storage. If the key exists, the stored value will be used instead.
 * @returns The state and its setter function.
 */
export function useLocalStorageState<S>(
  key: string,
  initialState: S,
): [S, React.Dispatch<React.SetStateAction<S>>] {
  const [state, setState] = useState(() => getStorage(key, initialState));

  useEffect(() => {
    setStorage(key, state);
  }, [key, state]);

  return [state, setState];
}

/**
 * Acts like useReducer, but the state is also saved in local storage.
 * @param key The key to use for saving the state in local storage.
 * @param reducer The reducer function.
 * @param initialState The initial state value to use if the key does not exist
 *   in local storage. If the key exists, the stored value will be used instead.
 * @returns The state and its dispatch function.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useLocalStorageReducer<R extends React.Reducer<any, any>>(
  key: string,
  reducer: R,
  initialState: React.ReducerState<R>,
): [React.ReducerState<R>, React.Dispatch<React.ReducerAction<R>>] {
  const [state, dispatch] = useReducer(reducer, initialState, () =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    getStorage(key, initialState),
  );

  useEffect(() => {
    setStorage(key, state);
  }, [key, state]);

  return [state, dispatch];
}
