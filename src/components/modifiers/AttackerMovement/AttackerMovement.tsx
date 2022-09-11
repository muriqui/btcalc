import React from "react";
import Selector, { SelectorProps } from "components/ui/Selector/Selector";
import ModifierSelectorOption from "components/ui/Selector/ModifierSelectorOption";

export interface AttackerMovementProps
  extends Omit<SelectorProps, "children" | "onChange" | "label"> {
  /** The label of the currently selected option. */
  selected?: string;
  /** Whether the selector options should be disabled. */
  disabled?: boolean;
  onChange?: (label: string, value: number) => void;
}

const options = [
  {
    label: "Stationary",
    value: 0,
  },
  {
    label: "Walked",
    value: 1,
  },
  {
    label: "Ran",
    value: 2,
  },
  {
    label: "Jumped",
    value: 3,
  },
];

/**
 * The attacker's movement.
 */
function AttackerMovement({
  selected = options[0].label,
  disabled,
  onChange = () => {},
  ...props
}: AttackerMovementProps) {
  return (
    <Selector label="Movement" {...props}>
      {options.map((option) => (
        <ModifierSelectorOption
          key={option.label}
          checked={option.label === selected}
          disabled={disabled}
          onChange={onChange}
          {...option}
        />
      ))}
    </Selector>
  );
}

export default AttackerMovement;
