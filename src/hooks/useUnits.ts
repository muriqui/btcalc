import { useLocalStorageReducer } from "./useLocalStorage";
import { uuid } from "../services/utilityService";
import { CrudAction, UnitInterface } from "../types";

/**
 * Available actions for the reducer function.
 */
type unitReducerAction =
  | { type: CrudAction.Add; unit: UnitInterface }
  | { type: CrudAction.Update; unit: UnitInterface }
  | { type: CrudAction.Delete; id: string };

/**
 * Reducer function for the CRUD operations on the player units list.
 * @param units The player's unit list.
 * @param action The action to perform.
 * @returns The updated unit list.
 */
function unitReducer(
  units: UnitInterface[],
  action: unitReducerAction,
): UnitInterface[] {
  switch (action.type) {
    case CrudAction.Add:
      return [...units, action.unit];

    case CrudAction.Update:
      return units.map((unit) =>
        unit.id === action.unit.id ? action.unit : unit,
      );

    case CrudAction.Delete:
      return units.filter((unit) => unit.id !== action.id);
  }
}

/**
 * Locally stored reducer hook for the player's units.
 * @returns The units list and the add, update, and delete handlers.
 */
export default function useUnits(): [
  UnitInterface[],
  () => void,
  (unit: UnitInterface) => void,
  (id: string) => void,
] {
  const [units, dispatch] = useLocalStorageReducer("units", unitReducer, [
    { id: uuid(), name: "", gunnery: 4 },
  ] as UnitInterface[]);

  const handleAddUnit = () =>
    dispatch({
      type: CrudAction.Add,
      unit: { id: uuid(), name: "", gunnery: 4 },
    });

  const handleUpdateUnit = (unit: UnitInterface) =>
    dispatch({
      type: CrudAction.Update,
      unit,
    });

  const handleDeleteUnit = (id: string) =>
    dispatch({
      type: CrudAction.Delete,
      id,
    });

  return [units, handleAddUnit, handleUpdateUnit, handleDeleteUnit];
}
