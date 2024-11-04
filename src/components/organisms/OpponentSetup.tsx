import { opponentInterface } from "../../types";
import Button from "../atoms/Button";
import Input from "../molecules/Input";

export interface OpponentSetupProps {
  /** A list of opponent units. */
  opponents: opponentInterface[];
  /** Callback for adding an opponent. */
  onAddOpponent: () => void;
  /** Callback for updating an opponent. */
  onUpdateOpponent: (opponent: opponentInterface) => void;
  /** Callback for deleting an opponent. */
  onDeleteOpponent: (id: string) => void;
}

/**
 * The opponent setup form.
 */
export default function OpponentSetup({
  opponents,
  onAddOpponent,
  onUpdateOpponent,
  onDeleteOpponent,
}: OpponentSetupProps) {
  return (
    <>
      {opponents.map((opponent) => (
        <div
          key={opponent.id}
          className="mt-4 flex flex-row items-center gap-x-2"
        >
          <div className="flex-grow">
            <Input
              type="text"
              label="Name"
              value={opponent.name}
              onChange={(e) =>
                onUpdateOpponent({ ...opponent, name: e.target.value })
              }
            />
          </div>
          <Button
            className="size-12 flex-none"
            onClick={() => onDeleteOpponent(opponent.id)}
          >
            <span className="text-xl">⊖</span>
            <span className="sr-only"> remove</span>
          </Button>
        </div>
      ))}
      <Button className="my-2 -ml-2.5" onClick={onAddOpponent}>
        <span className="text-xl">⊕</span> Add an opponent
      </Button>
    </>
  );
}
