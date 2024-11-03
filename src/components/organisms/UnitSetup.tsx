import { unitInterface } from "../../types";
import Button from "../atoms/Button";
import Input from "../molecules/Input";
import Select from "../molecules/Select";

export interface UnitSetupProps {
  /** A list of units. */
  units: unitInterface[];
  /** Callback for adding a new unit. */
  onAddUnit: () => void;
  /** Callback for updating a unit. */
  onUpdateUnit: (unit: unitInterface) => void;
  /** Callback for deleting a unit. */
  onDeleteUnit: (id: string) => void;
}

/**
 * The unit setup form.
 */
export default function UnitSetup({
  units,
  onAddUnit,
  onUpdateUnit,
  onDeleteUnit,
}: UnitSetupProps) {
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
              onChange={(e) => onUpdateUnit({ ...unit, name: e.target.value })}
            />
            <Select
              label="Gunnery skill"
              value={unit.gunnery}
              className="rounded-t-none sm:flex-none sm:rounded-l-none sm:rounded-tr-md"
              noShadow={true}
              onChange={(e) =>
                onUpdateUnit({ ...unit, gunnery: parseInt(e.target.value) })
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
            onClick={() => onDeleteUnit(unit.id)}
          >
            <span className="text-xl">⊖</span>
            <span className="sr-only"> remove</span>
          </Button>
        </div>
      ))}
      <Button className="-mx-2.5 my-3.5" onClick={onAddUnit}>
        <span className="text-xl">⊕</span> Add a unit
      </Button>
    </>
  );
}
