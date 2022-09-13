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
    if (modifier.value || (label === minimumLabel && modifier.value === 0)) {
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

  const minimumRangeState = selected.get(minimumLabel)?.state ?? {
    checked: false,
    minimumRange: undefined,
    targetRange: undefined,
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
        {...minimumRangeState}
        onChange={(label, value, state) =>
          handleChange(minimumLabel, { label, value, state })
        }
      />
    </div>
  );
}

export default RangeModifier;
