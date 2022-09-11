import React from "react";
import Selector, { SelectorProps } from "components/ui/Selector/Selector";
import ModifierSelectorOption from "components/ui/Selector/ModifierSelectorOption";

export interface TargetHexesMovedProps
  extends Omit<SelectorProps, "children" | "onChange" | "label"> {
  /** The label of the currently selected option. */
  selected?: string;
  /** Whether the selector options should be disabled. */
  disabled?: boolean;
  onChange?: (label: string, value: number) => void;
}

const options = [
  {
    label: "Moved 0–2 hexes",
    value: 0,
  },
  {
    label: "Moved 3–4 hexes",
    value: 1,
  },
  {
    label: "Moved 5–6 hexes",
    value: 2,
  },
  {
    label: "Moved 7–9 hexes",
    value: 3,
  },
  {
    label: "Moved 10–17 hexes",
    value: 4,
  },
  {
    label: "Moved 18–24 hexes",
    value: 5,
  },
  {
    label: "Moved 25+ hexes",
    value: 6,
  },
];

/**
 * The number of hexes that the target moved.
 */
function TargetHexesMoved({
  selected = options[0].label,
  disabled,
  onChange = () => {},
  ...props
}: TargetHexesMovedProps) {
  return (
    <Selector label="Hexes moved" {...props}>
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

export default TargetHexesMoved;
