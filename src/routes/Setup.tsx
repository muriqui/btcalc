import { useLocalStorage } from "../hooks/useLocalStorage";
import Button from "../components/atoms/Button";
import ButtonLink from "../components/atoms/ButtonLink";
import Heading from "../components/atoms/Heading";
import Input from "../components/molecules/Input";
import Select from "../components/molecules/Select";

interface unitInterface {
  id: string;
  name?: string;
  gunnery?: number;
}

interface opponentInterface {
  id: string;
  name?: string;
}

/**
 * The setup page.
 */
export default function Setup() {
  const [units, setUnits] = useLocalStorage<unitInterface[]>("units", [
    { id: crypto.randomUUID(), name: "", gunnery: 4 },
  ]);

  const handleUpdateUnit = (
    unitId: string,
    updatedUnit: Omit<unitInterface, "id">,
  ) => {
    setUnits((prevUnits) =>
      prevUnits.map((unit) =>
        unit.id === unitId ? { ...unit, ...updatedUnit } : unit,
      ),
    );
  };

  const handleAddUnit = () => {
    const newUnit = { id: crypto.randomUUID(), name: "", gunnery: 4 };
    setUnits([...units, newUnit]);
  };

  const handleDeleteUnit = (unitId: string) => {
    const newUnits = units.filter((unit) => unit.id !== unitId);
    setUnits(newUnits);
  };

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
    <div className="max-w-5xl pb-12 pt-6 sm:pb-24 sm:pt-12 lg:mx-auto">
      <Heading level={1}>Set up a game</Heading>

      <section className="my-6 max-w-2xl sm:my-12">
        <Heading level={2}>My units</Heading>
        {units.map((unit) => (
          <div
            key={unit.id}
            className="mt-6 flex flex-row items-center gap-x-6 lg:gap-x-8"
          >
            <fieldset className="isolate max-w-sm flex-1 -space-y-px rounded-md shadow-sm sm:flex sm:max-w-none sm:flex-none sm:-space-x-px sm:space-y-0">
              <Input
                type="text"
                label="Name"
                value={unit.name}
                className="rounded-b-none sm:w-96 sm:flex-none sm:rounded-r-none sm:rounded-bl-md"
                noShadow={true}
                onChange={(e) =>
                  handleUpdateUnit(unit.id, { name: e.target.value })
                }
              />
              <Select
                label="Gunnery skill"
                value={unit.gunnery}
                className="rounded-t-none sm:flex-none sm:rounded-l-none sm:rounded-tr-md"
                noShadow={true}
                onChange={(e) =>
                  handleUpdateUnit(unit.id, {
                    gunnery: parseInt(e.target.value),
                  })
                }
              >
                <option value={0}>0 (Mythical)</option>
                <option value={1}>1 (Legendary)</option>
                <option value={2}>2 (Elite)</option>
                <option value={3}>3 (Veteran)</option>
                <option value={4}>4 (Regular)</option>
                <option value={5}>5 (Green)</option>
              </Select>
            </fieldset>
            <Button
              className="-mx-2.5 flex-none"
              onClick={() => handleDeleteUnit(unit.id)}
            >
              <span className="text-xl">⊖</span>
              <span className="sr-only"> remove</span>
            </Button>
          </div>
        ))}
        <Button className="-mx-2.5 my-3.5" onClick={handleAddUnit}>
          <span className="text-xl">⊕</span> Add a unit
        </Button>
      </section>

      <section className="my-6 max-w-2xl sm:my-12">
        <Heading level={2}>Opposing units</Heading>
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
      </section>

      <div className="my-6 flex justify-center sm:my-12">
        <ButtonLink to="/play" className="inline-block">
          Start game
        </ButtonLink>
      </div>
    </div>
  );
}
