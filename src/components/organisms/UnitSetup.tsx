import { useReducer } from "react";
import { CrudAction, type UnitInterface } from "../../types";
import { uuid } from "../../services/utilityService";
import Button from "../atoms/Button";
import Input from "../molecules/Input";
import Select from "../molecules/Select";

/**
 * Available actions for the reducer function.
 */
type unitReducerAction =
  | { type: CrudAction.Add; unit: UnitInterface }
  | { type: CrudAction.Update; unit: UnitInterface }
  | { type: CrudAction.Delete; id: string };

/**
 * Reducer function for the player's unit list.
 * @param units The player's unit list.
 * @param action The action to perform.
 * @returns The updated unit list.
 */
function unitReducer(
  units: UnitInterface[],
  action: unitReducerAction,
): UnitInterface[] {
  switch (action.type) {
    case CrudAction.Add:
      return [...units, action.unit];

    case CrudAction.Update:
      return units.map((unit) =>
        unit.id === action.unit.id ? action.unit : unit,
      );

    case CrudAction.Delete:
      return units.filter((unit) => unit.id !== action.id);
  }
}

/**
 * The unit setup form elements.
 */
export default function UnitSetup() {
  const [units, dispatch] = useReducer(unitReducer, [
    { id: uuid(), name: "", gunnery: 4 },
  ]);

  const handleAddUnit = () =>
    dispatch({
      type: CrudAction.Add,
      unit: { id: uuid(), name: "", gunnery: 4 },
    });

  const handleUpdateUnit = (unit: UnitInterface) =>
    dispatch({
      type: CrudAction.Update,
      unit,
    });

  const handleDeleteUnit = (id: string) =>
    dispatch({
      type: CrudAction.Delete,
      id,
    });

  return (
    <>
      {units.map((unit, index) => (
        <div
          key={unit.id}
          className="mt-4 flex max-w-3xl flex-row items-center gap-x-2 @container"
        >
          <fieldset className="isolate flex-grow -space-y-px rounded-md shadow-sm @md:flex @md:-space-x-px @md:space-y-0">
            <input type="hidden" name={`units[${index}][id]`} value={unit.id} />
            <Input
              name={`units[${index}][name]`}
              type="text"
              label="Unit name"
              value={unit.name}
              className="rounded-b-none @md:flex-grow @md:rounded-r-none @md:rounded-bl-md"
              noShadow={true}
              onChange={(e) =>
                handleUpdateUnit({ ...unit, name: e.target.value })
              }
            />
            <Select
              name={`units[${index}][gunnery]`}
              label="Gunnery skill"
              value={unit.gunnery}
              className="rounded-t-none @md:flex-none @md:rounded-l-none @md:rounded-tr-md"
              noShadow={true}
              onChange={(e) =>
                handleUpdateUnit({ ...unit, gunnery: parseInt(e.target.value) })
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
            className="size-12 flex-none"
            onClick={() => handleDeleteUnit(unit.id)}
          >
            <span className="text-xl">⊖</span>
            <span className="sr-only"> remove</span>
          </Button>
        </div>
      ))}
      <Button className="my-2" onClick={handleAddUnit}>
        <span className="text-xl">⊕</span> Add a unit
      </Button>
    </>
  );
}
