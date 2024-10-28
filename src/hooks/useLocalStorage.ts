import { useEffect, useState } from "react";

/**
 * Gets a value from local storage.
 * @param key The key of the local storage value you want to retrieve.
 * @param defaultValue The value to return instead if the key does not exist.
 * @returns The locally stored value for the given key, or the default value if there is no value for that key.
 */
function getStorageValue<Type>(key: string, defaultValue: Type): Type {
  const saved = localStorage.getItem(key);
  return saved ? (JSON.parse(saved) as Type) : defaultValue;
}

/**
 * Returns a state variable that is also stored in local storage.
 * @param key The key to use for storing the state variable in local storage.
 * @param defaultValue The starting value for the state variable.
 * @returns The state variable and its dispatch function.
 */
export function useLocalStorage<Type>(
  key: string,
  defaultValue: Type,
): [Type, React.Dispatch<React.SetStateAction<Type>>] {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
