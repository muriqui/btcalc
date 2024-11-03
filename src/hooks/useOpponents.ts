import { useLocalStorageReducer } from "./useLocalStorage";
import { uuid } from "../services/utilityService";
import { crudAction, opponentInterface } from "../types";

/**
 * Available actions for the reducer function.
 */
type opponentReducerAction =
  | { type: crudAction.Add; opponent: opponentInterface }
  | { type: crudAction.Update; opponent: opponentInterface }
  | { type: crudAction.Delete; id: string };

/**
 * Reducer function for the CRUD operations on the opponent units list.
 * @param opponents The opponent's unit list.
 * @param action The action to perform.
 * @returns The updated unit list.
 */
function opponentReducer(
  opponents: opponentInterface[],
  action: opponentReducerAction,
): opponentInterface[] {
  switch (action.type) {
    case crudAction.Add:
      return [...opponents, action.opponent];

    case crudAction.Update:
      return opponents.map((opponent) =>
        opponent.id === action.opponent.id ? action.opponent : opponent,
      );

    case crudAction.Delete:
      return opponents.filter((opponent) => opponent.id !== action.id);
  }
}

/**
 * Locally stored reducer hook for the opponent's units.
 * @returns The opponent units list and the add, update, and delete handlers.
 */
export default function useOpponents(): [
  opponentInterface[],
  () => void,
  (opponent: opponentInterface) => void,
  (id: string) => void,
] {
  const [opponents, dispatch] = useLocalStorageReducer(
    "opponents",
    opponentReducer,
    [{ id: uuid(), name: "" }] as opponentInterface[],
  );

  const handleAddOpponent = () =>
    dispatch({
      type: crudAction.Add,
      opponent: { id: uuid(), name: "" },
    });

  const handleUpdateOpponent = (opponent: opponentInterface) =>
    dispatch({
      type: crudAction.Update,
      opponent,
    });

  const handleDeleteOpponent = (id: string) =>
    dispatch({
      type: crudAction.Delete,
      id,
    });

  return [
    opponents,
    handleAddOpponent,
    handleUpdateOpponent,
    handleDeleteOpponent,
  ];
}
