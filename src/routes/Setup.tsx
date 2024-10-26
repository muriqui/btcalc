import { useEffect, useState } from "react";
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
  const [units, setUnits] = useState<unitInterface[]>(() => {
    const saved = localStorage.getItem("units");
    const units = saved
      ? (JSON.parse(saved) as unitInterface[])
      : [{ id: crypto.randomUUID(), name: "", gunnery: 4 }];
    return units;
  });

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

  useEffect(() => {
    localStorage.setItem("units", JSON.stringify(units));
  }, [units]);

  const [opponents, setOpponents] = useState<opponentInterface[]>(() => {
    const saved = localStorage.getItem("opponents");
    const opponents = saved
      ? (JSON.parse(saved) as opponentInterface[])
      : [{ id: crypto.randomUUID(), name: "" }];
    return opponents;
  });

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

  useEffect(() => {
    localStorage.setItem("opponents", JSON.stringify(opponents));
  }, [opponents]);

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
            <button
              className="-mx-2.5 flex-none px-2.5 py-2.5 font-semibold text-amber-800 hover:text-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 dark:text-amber-600 hover:dark:text-amber-500"
              onClick={() => handleDeleteUnit(unit.id)}
            >
              <span className="text-xl">⊖</span>
              <span className="sr-only"> remove</span>
            </button>
          </div>
        ))}
        <button
          className="-mx-2.5 my-3.5 px-2.5 py-2.5 font-semibold text-amber-800 hover:text-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 dark:text-amber-600 hover:dark:text-amber-500"
          onClick={handleAddUnit}
        >
          <span className="text-xl">⊕</span> Add a unit
        </button>
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
            <button
              className="-mx-2.5 flex-none px-2.5 py-2.5 font-semibold text-amber-800 hover:text-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 dark:text-amber-600 hover:dark:text-amber-500"
              onClick={() => handleDeleteOpponent(opponent.id)}
            >
              <span className="text-xl">⊖</span>
              <span className="sr-only"> remove</span>
            </button>
          </div>
        ))}
        <button
          className="-mx-2.5 my-3.5 px-2.5 py-2.5 font-semibold text-amber-800 hover:text-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 dark:text-amber-600 hover:dark:text-amber-500"
          onClick={handleAddOpponent}
        >
          <span className="text-xl">⊕</span> Add an opponent
        </button>
      </section>

      <div className="my-6 flex justify-center sm:my-12">
        <ButtonLink to="/play" className="inline-block">
          Start game
        </ButtonLink>
      </div>
    </div>
  );
}
