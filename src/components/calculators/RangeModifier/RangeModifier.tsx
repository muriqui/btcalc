import React from "react";
import { modifierInterface } from "utils/modifiers";
import Range, { label as rangeLabel } from "components/modifiers/Range/Range";
import MinimumRange, {
  label as minimumLabel,
} from "components/modifiers/MinimumRange/MinimumRange";

interface RangeModifierProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
  selected?: Map<string, modifierInterface>;
  onChange?: (selected: Map<string, modifierInterface>) => void;
}

/**
 * Calculates the total range modifier.
 */
function RangeModifier({
  selected = new Map(),
  onChange = () => {},
  ...props
}: RangeModifierProps) {
  const handleChange = (label: string, modifier: modifierInterface) => {
    const newSelected = new Map(selected);
    if (modifier.value) {
      newSelected.set(label, modifier);

      // Minimum range and medium/long range are mutually exclusive.
      if (label === minimumLabel) {
        newSelected.delete(rangeLabel);
      } else if (label === rangeLabel) {
        newSelected.delete(minimumLabel);
      }
    } else {
      newSelected.delete(label);
    }
    onChange(newSelected);
  };

  return (
    <div {...props}>
      <Range
        selected={
          selected.has(rangeLabel) ? selected.get(rangeLabel)!.label : undefined
        }
        onChange={(label, value) => handleChange(rangeLabel, { label, value })}
      />
      <MinimumRange
        checked={selected.has(minimumLabel)}
        onChange={(label, value, state) =>
          handleChange(minimumLabel, { label, value, state })
        }
      />
    </div>
  );
}

export default RangeModifier;
