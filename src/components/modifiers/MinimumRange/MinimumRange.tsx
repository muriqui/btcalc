import React from "react";
import Modifier from "components/ui/Modifier/Modifier";
import NumberInput from "components/ui/NumberInput/NumberInput";
import Toggle from "components/ui/Toggle/Toggle";

export interface MinimumRangeState {
  checked: boolean;
  minimumRange?: number;
  targetRange?: number;
}

export interface MinimumRangeProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
  /** Whether the toggle switch is on (checked) or off (not checked). */
  checked?: boolean;
  /** The weapon's minimum range. */
  minimumRange?: number;
  /** The range to the target. */
  targetRange?: number;
  onChange?: (label: string, value: number, state: MinimumRangeState) => void;
}

export const label = "Minimum range";

/**
 * Calculates the minimum range modifier.
 */
function MinimumRange({
  checked = false,
  minimumRange,
  targetRange,
  onChange = () => {},
  ...props
}: MinimumRangeProps) {
  const sanitizedMinimumRange = minimumRange || undefined;
  const sanitizedTargetRange = targetRange || undefined;
  const value =
    checked && sanitizedMinimumRange && sanitizedTargetRange
      ? sanitizedMinimumRange - sanitizedTargetRange + 1
      : 0;

  const handleChange = ({
    checked,
    minimumRange,
    targetRange,
  }: MinimumRangeState) => {
    const sanitizedMinimumRange = minimumRange || undefined;
    let sanitizedTargetRange = targetRange || undefined;

    // Target range cannot be greater than minimum range.
    if (sanitizedMinimumRange && sanitizedTargetRange) {
      sanitizedTargetRange =
        sanitizedTargetRange > sanitizedMinimumRange
          ? sanitizedMinimumRange
          : sanitizedTargetRange;
    }

    onChange(
      label,
      checked && sanitizedMinimumRange && sanitizedTargetRange
        ? sanitizedMinimumRange - sanitizedTargetRange + 1
        : 0,
      {
        checked,
        minimumRange: sanitizedMinimumRange,
        targetRange: sanitizedTargetRange,
      }
    );
  };

  return (
    <div {...props}>
      <Toggle
        label="Target is within the weapon's minimum range"
        checked={checked}
        onChange={(checked) =>
          handleChange({
            checked,
            minimumRange: sanitizedMinimumRange,
            targetRange: sanitizedTargetRange,
          })
        }
      >
        <div className={!checked ? "pointer-events-none" : "cursor-pointer"}>
          <Modifier
            value={value}
            hidden={!checked}
            onClick={() =>
              handleChange({
                checked: !checked,
                minimumRange: sanitizedMinimumRange,
                targetRange: sanitizedTargetRange,
              })
            }
          />
        </div>
      </Toggle>
      <NumberInput
        label="Weapon's minimum range"
        value={sanitizedMinimumRange}
        min={1}
        disabled={!checked}
        onChange={(minimumRange) =>
          handleChange({
            checked,
            minimumRange,
            targetRange: sanitizedTargetRange,
          })
        }
      />
      <NumberInput
        label="Range to target"
        value={sanitizedTargetRange}
        min={1}
        max={sanitizedMinimumRange}
        disabled={!checked}
        onChange={(targetRange) =>
          handleChange({
            checked,
            minimumRange: sanitizedMinimumRange,
            targetRange,
          })
        }
      />
    </div>
  );
}

export default MinimumRange;
