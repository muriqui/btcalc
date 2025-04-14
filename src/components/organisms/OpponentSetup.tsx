import { useReducer } from "react";
import { DataAction, type TWOpponentInterface } from "../../types";
import { uuid } from "../../services/utilityService";
import Button from "../atoms/Button";
import Input from "../molecules/Input";

/**
 * Available actions for the reducer function.
 */
type opponentReducerAction =
  | { type: DataAction.Add; opponent: TWOpponentInterface }
  | { type: DataAction.Update; opponent: TWOpponentInterface }
  | { type: DataAction.Delete; id: string };

/**
 * Reducer function for the opponent's unit list.
 * @param opponents The opponent's unit list.
 * @param action The action to perform.
 * @returns The updated unit list.
 */
function opponentReducer(
  opponents: TWOpponentInterface[],
  action: opponentReducerAction,
): TWOpponentInterface[] {
  switch (action.type) {
    case DataAction.Add:
      return [...opponents, action.opponent];

    case DataAction.Update:
      return opponents.map((opponent) =>
        opponent.id === action.opponent.id ? action.opponent : opponent,
      );

    case DataAction.Delete:
      return opponents.filter((opponent) => opponent.id !== action.id);
  }
}

/**
 * The opponent setup form elements.
 */
export default function OpponentSetup() {
  const [opponents, dispatch] = useReducer(opponentReducer, [
    { id: uuid(), name: "" },
  ]);

  const handleAddOpponent = () =>
    dispatch({
      type: DataAction.Add,
      opponent: { id: uuid(), name: "" },
    });

  const handleUpdateOpponent = (opponent: TWOpponentInterface) =>
    dispatch({
      type: DataAction.Update,
      opponent,
    });

  const handleDeleteOpponent = (id: string) =>
    dispatch({
      type: DataAction.Delete,
      id,
    });

  return (
    <>
      {opponents.map((opponent, index) => (
        <div
          key={opponent.id}
          className="mt-4 flex max-w-3xl flex-row items-center gap-x-2"
        >
          <div className="grow">
            <input
              type="hidden"
              name={`opponents[${index}][id]`}
              value={opponent.id}
            />
            <Input
              name={`opponents[${index}][name]`}
              type="text"
              label="Opponent name"
              value={opponent.name}
              onChange={(e) =>
                handleUpdateOpponent({ ...opponent, name: e.target.value })
              }
            />
          </div>
          <Button
            className="size-12 flex-none"
            onClick={() => handleDeleteOpponent(opponent.id)}
          >
            <span className="text-xl">⊖</span>
            <span className="sr-only">{` remove ${opponent.name}`}</span>
          </Button>
        </div>
      ))}
      <Button className="my-2" onClick={handleAddOpponent}>
        <span className="text-xl">⊕</span> Add an opponent
      </Button>
    </>
  );
}
