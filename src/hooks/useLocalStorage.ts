import { useEffect, useReducer, useState } from "react";
import { getStorage, setStorage } from "../services/utilityService";

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
