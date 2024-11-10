import { useLocalStorageReducer } from "./useLocalStorage";
import { uuid } from "../services/utilityService";
import { CrudAction, OpponentInterface } from "../types";

/**
 * Available actions for the reducer function.
 */
type opponentReducerAction =
  | { type: CrudAction.Add; opponent: OpponentInterface }
  | { type: CrudAction.Update; opponent: OpponentInterface }
  | { type: CrudAction.Delete; id: string };

/**
 * Reducer function for the CRUD operations on the opponent units list.
 * @param opponents The opponent's unit list.
 * @param action The action to perform.
 * @returns The updated unit list.
 */
function opponentReducer(
  opponents: OpponentInterface[],
  action: opponentReducerAction,
): OpponentInterface[] {
  switch (action.type) {
    case CrudAction.Add:
      return [...opponents, action.opponent];

    case CrudAction.Update:
      return opponents.map((opponent) =>
        opponent.id === action.opponent.id ? action.opponent : opponent,
      );

    case CrudAction.Delete:
      return opponents.filter((opponent) => opponent.id !== action.id);
  }
}

/**
 * Locally stored reducer hook for the opponent's units.
 * @returns The opponent units list and the add, update, and delete handlers.
 */
export default function useOpponents(): [
  OpponentInterface[],
  () => void,
  (opponent: OpponentInterface) => void,
  (id: string) => void,
] {
  const [opponents, dispatch] = useLocalStorageReducer(
    "opponents",
    opponentReducer,
    [{ id: uuid(), name: "" }] as OpponentInterface[],
  );

  const handleAddOpponent = () =>
    dispatch({
      type: CrudAction.Add,
      opponent: { id: uuid(), name: "" },
    });

  const handleUpdateOpponent = (opponent: OpponentInterface) =>
    dispatch({
      type: CrudAction.Update,
      opponent,
    });

  const handleDeleteOpponent = (id: string) =>
    dispatch({
      type: CrudAction.Delete,
      id,
    });

  return [
    opponents,
    handleAddOpponent,
    handleUpdateOpponent,
    handleDeleteOpponent,
  ];
}
