import { useLocalStorageReducer } from "./useLocalStorage";
import { uuid } from "../services/utilityService";
import { crudAction, unitInterface } from "../types";

/**
 * Available actions for the reducer function.
 */
type unitReducerAction =
  | { type: crudAction.Add; unit: unitInterface }
  | { type: crudAction.Update; unit: unitInterface }
  | { type: crudAction.Delete; id: string };

/**
 * Reducer function for the CRUD operations on the player units list.
 * @param units The player's unit list.
 * @param action The action to perform.
 * @returns The updated unit list.
 */
function unitReducer(
  units: unitInterface[],
  action: unitReducerAction,
): unitInterface[] {
  switch (action.type) {
    case crudAction.Add:
      return [...units, action.unit];

    case crudAction.Update:
      return units.map((unit) =>
        unit.id === action.unit.id ? action.unit : unit,
      );

    case crudAction.Delete:
      return units.filter((unit) => unit.id !== action.id);
  }
}

/**
 * Locally stored reducer hook for the player's units.
 * @returns The units list and the add, update, and delete handlers.
 */
export default function useUnits(): [
  unitInterface[],
  () => void,
  (unit: unitInterface) => void,
  (id: string) => void,
] {
  const [units, dispatch] = useLocalStorageReducer("units", unitReducer, [
    { id: uuid(), name: "", gunnery: 4 },
  ] as unitInterface[]);

  const handleAddUnit = () =>
    dispatch({
      type: crudAction.Add,
      unit: { id: uuid(), name: "", gunnery: 4 },
    });

  const handleUpdateUnit = (unit: unitInterface) =>
    dispatch({
      type: crudAction.Update,
      unit,
    });

  const handleDeleteUnit = (id: string) =>
    dispatch({
      type: crudAction.Delete,
      id,
    });

  return [units, handleAddUnit, handleUpdateUnit, handleDeleteUnit];
}
