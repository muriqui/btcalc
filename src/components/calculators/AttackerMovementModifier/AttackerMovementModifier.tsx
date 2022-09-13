import React from "react";
import { modifierInterface } from "utils/modifiers";
import AttackerMovement, {
  label as movementLabel,
} from "components/modifiers/AttackerMovement/AttackerMovement";
import AttackerProne, {
  label as proneLabel,
} from "components/modifiers/AttackerProne/AttackerProne";

interface AttackerMovementModifierProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
  selected?: Map<string, modifierInterface>;
  onChange?: (selected: Map<string, modifierInterface>) => void;
}

/**
 * Calculates the total attacker movement modifier.
 */
function AttackerMovementModifier({
  selected = new Map(),
  onChange = () => {},
  ...props
}: AttackerMovementModifierProps) {
  const handleChange = (label: string, modifier: modifierInterface) => {
    const newSelected = new Map(selected);
    if (modifier.value) {
      newSelected.set(label, modifier);
    } else {
      newSelected.delete(label);
    }
    onChange(newSelected);
  };

  return (
    <div {...props}>
      <AttackerMovement
        selected={
          selected.has(movementLabel)
            ? selected.get(movementLabel)!.label
            : undefined
        }
        onChange={(label, value) =>
          handleChange(movementLabel, { label, value })
        }
      />
      <AttackerProne
        checked={selected.has(proneLabel)}
        onChange={(label, value) => handleChange(proneLabel, { label, value })}
      />
    </div>
  );
}

export default AttackerMovementModifier;
