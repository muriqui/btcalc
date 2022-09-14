import React from "react";
import { modifierInterface } from "utils/modifiers";
import TargetHexesMoved, {
  label as hexesLabel,
} from "components/modifiers/TargetHexesMoved/TargetHexesMoved";
import TargetJumped, {
  label as jumpedLabel,
} from "components/modifiers/TargetJumped/TargetJumped";
import TargetImmobile, {
  label as immobileLabel,
} from "components/modifiers/TargetImmobile/TargetImmobile";
import TargetProne, {
  label as proneLabel,
} from "components/modifiers/TargetProne/TargetProne";
import TargetProneAdjacent, {
  label as adjacentLabel,
} from "components/modifiers/TargetProneAdjacent/TargetProneAdjacent";

interface TargetMovementModifierProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
  selected?: Map<string, modifierInterface>;
  onChange?: (selected: Map<string, modifierInterface>) => void;
}

/**
 * Calculates the total target movement modifier.
 */
function TargetMovementModifier({
  selected = new Map(),
  onChange = () => {},
  ...props
}: TargetMovementModifierProps) {
  const handleChange = (label: string, modifier: modifierInterface) => {
    const newSelected = new Map(selected);
    if (modifier.value) {
      newSelected.set(label, modifier);

      // "Prone" and "Prone in an adjacent hex" are mutually exclusive.
      if (label === proneLabel) {
        newSelected.delete(adjacentLabel);
      } else if (label === adjacentLabel) {
        newSelected.delete(proneLabel);
      }
      // Immobile means they can't have moved or jumped.
      else if (label === immobileLabel) {
        newSelected.delete(hexesLabel);
        newSelected.delete(jumpedLabel);
      } else if (label === hexesLabel || label === jumpedLabel) {
        newSelected.delete(immobileLabel);
      }
    } else {
      newSelected.delete(label);
    }
    onChange(newSelected);
  };

  return (
    <div {...props}>
      <TargetHexesMoved
        selected={
          selected.has(hexesLabel) ? selected.get(hexesLabel)!.label : undefined
        }
        onChange={(label, value) => handleChange(hexesLabel, { label, value })}
      />
      <TargetJumped
        checked={selected.has(jumpedLabel)}
        onChange={(label, value) => handleChange(jumpedLabel, { label, value })}
      />
      <TargetImmobile
        checked={selected.has(immobileLabel)}
        onChange={(label, value) =>
          handleChange(immobileLabel, { label, value })
        }
      />
      <TargetProne
        checked={selected.has(proneLabel)}
        onChange={(label, value) => handleChange(proneLabel, { label, value })}
      />
      <TargetProneAdjacent
        checked={selected.has(adjacentLabel)}
        onChange={(label, value) =>
          handleChange(adjacentLabel, { label, value })
        }
      />
    </div>
  );
}

export default TargetMovementModifier;
