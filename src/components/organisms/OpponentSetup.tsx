import { useReducer } from "react";
import { CrudAction, type OpponentInterface } from "../../types";
import { uuid } from "../../services/utilityService";
import Button from "../atoms/Button";
import Input from "../molecules/Input";

/**
 * Available actions for the reducer function.
 */
type opponentReducerAction =
  | { type: CrudAction.Add; opponent: OpponentInterface }
  | { type: CrudAction.Update; opponent: OpponentInterface }
  | { type: CrudAction.Delete; id: string };

/**
 * Reducer function for the opponent's unit list.
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
 * The opponent setup form elements.
 */
export default function OpponentSetup() {
  const [opponents, dispatch] = useReducer(opponentReducer, [
    { id: uuid(), name: "" },
  ]);

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
            <span className="sr-only"> remove</span>
          </Button>
        </div>
      ))}
      <Button className="my-2" onClick={handleAddOpponent}>
        <span className="text-xl">⊕</span> Add an opponent
      </Button>
    </>
  );
}
