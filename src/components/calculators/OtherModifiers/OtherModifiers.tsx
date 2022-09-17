import React from "react";
import { modifierInterface } from "utils/modifiers";
import Heat, { label as heatLabel } from "components/modifiers/Heat/Heat";
import SecondaryTargetForward, {
  label as secondaryForwardLabel,
} from "components/modifiers/SecondaryTargetForward/SecondaryTargetForward";
import SecondaryTargetSideRear, {
  label as secondarySideRearLabel,
} from "components/modifiers/SecondaryTargetSideRear/SecondaryTargetSideRear";

interface OtherModifiersProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
  selected?: Map<string, modifierInterface>;
  onChange?: (selected: Map<string, modifierInterface>) => void;
}

/**
 * Calculates the sum of all modifiers in GATOR's "Other" category.
 */
function OtherModifiers({
  selected = new Map(),
  onChange = () => {},
  ...props
}: OtherModifiersProps) {
  const handleChange = (label: string, modifier: modifierInterface) => {
    const newSelected = new Map(selected);
    if (modifier.value) {
      newSelected.set(label, modifier);

      // The two secondary target options are mutually exclusive.
      if (label === secondaryForwardLabel) {
        newSelected.delete(secondarySideRearLabel);
      } else if (label === secondarySideRearLabel) {
        newSelected.delete(secondaryForwardLabel);
      }
    } else {
      newSelected.delete(label);
    }
    onChange(newSelected);
  };

  return (
    <div {...props}>
      <div>@todo Mech damage</div>
      <Heat
        selected={
          selected.has(heatLabel) ? selected.get(heatLabel)!.label : undefined
        }
        onChange={(label, value) => handleChange(heatLabel, { label, value })}
      />
      <SecondaryTargetForward
        checked={selected.has(secondaryForwardLabel)}
        onChange={(label, value) =>
          handleChange(secondaryForwardLabel, { label, value })
        }
      />
      <SecondaryTargetSideRear
        checked={selected.has(secondarySideRearLabel)}
        onChange={(label, value) =>
          handleChange(secondarySideRearLabel, { label, value })
        }
      />
      <div>@todo Specialized attacks</div>
      <div>@todo Terrain modifiers</div>
    </div>
  );
}

export default OtherModifiers;
