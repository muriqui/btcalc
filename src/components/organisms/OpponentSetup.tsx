import { useLocalStorage } from "../../hooks/useLocalStorage";
import Button from "../atoms/Button";
import Input from "../molecules/Input";

export interface opponentInterface {
  id: string;
  name?: string;
}

/**
 * The opponent setup form.
 */
export default function OpponentSetup() {
  const [opponents, setOpponents] = useLocalStorage<opponentInterface[]>(
    "opponents",
    [{ id: crypto.randomUUID(), name: "" }],
  );

  const handleUpdateOpponent = (
    opponentId: string,
    updatedOpponent: Omit<opponentInterface, "id">,
  ) => {
    setOpponents((prevOpponents) =>
      prevOpponents.map((opponent) =>
        opponent.id === opponentId
          ? { ...opponent, ...updatedOpponent }
          : opponent,
      ),
    );
  };

  const handleAddOpponent = () => {
    const newOpponent = { id: crypto.randomUUID(), name: "" };
    setOpponents([...opponents, newOpponent]);
  };

  const handleDeleteOpponent = (opponentId: string) => {
    const newOpponents = opponents.filter(
      (opponent) => opponent.id !== opponentId,
    );
    setOpponents(newOpponents);
  };

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
                handleUpdateOpponent(opponent.id, { name: e.target.value })
              }
            />
          </div>
          <Button
            className="-mx-2.5 flex-none"
            onClick={() => handleDeleteOpponent(opponent.id)}
          >
            <span className="text-xl">⊖</span>
            <span className="sr-only"> remove</span>
          </Button>
        </div>
      ))}
      <Button className="-mx-2.5 my-3.5" onClick={handleAddOpponent}>
        <span className="text-xl">⊕</span> Add an opponent
      </Button>
    </>
  );
}
