import { useLocalStorage } from "../../hooks/useLocalStorage";
import Button from "../atoms/Button";
import Input from "../molecules/Input";
import Select from "../molecules/Select";

export interface unitInterface {
  id: string;
  name?: string;
  gunnery?: number;
}

/**
 * The unit setup form.
 */
export default function UnitSetup() {
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

  return (
    <>
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
    </>
  );
}
