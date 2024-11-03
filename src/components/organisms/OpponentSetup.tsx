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
          className="mt-6 flex flex-row items-center gap-x-6 lg:gap-x-8"
        >
          <div className="max-w-sm flex-1 sm:max-w-none sm:flex-none">
            <Input
              type="text"
              label="Name"
              value={opponent.name}
              className="sm:w-96"
              onChange={(e) =>
                onUpdateOpponent({ ...opponent, name: e.target.value })
              }
            />
          </div>
          <Button
            className="-mx-2.5 flex-none"
            onClick={() => onDeleteOpponent(opponent.id)}
          >
            <span className="text-xl">⊖</span>
            <span className="sr-only"> remove</span>
          </Button>
        </div>
      ))}
      <Button className="-mx-2.5 my-3.5" onClick={onAddOpponent}>
        <span className="text-xl">⊕</span> Add an opponent
      </Button>
    </>
  );
}
