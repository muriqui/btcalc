import React from "react";
import { modifierInterface } from "utils/modifiers";
import Heat, { label as heatLabel } from "components/modifiers/Heat/Heat";

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
      <div>@todo Multiple targets</div>
      <div>@todo Specialized attacks</div>
      <div>@todo Terrain modifiers</div>
    </div>
  );
}

export default OtherModifiers;
