import React from "react";
import Selector, { SelectorProps } from "../Selector/Selector";
import ModifierSelectorOption from "../Selector/ModifierSelectorOption";

export interface OptionProps {
  /** The option label. */
  label: string;
  /** An optional description. */
  description?: string;
  /** The modifier value. */
  value: number;
}

export interface ModifierSelectorProps
  extends Omit<SelectorProps, "children" | "onChange"> {
  /** An array of options. */
  options: OptionProps[];
  /** The label of the currently selected option. */
  selected?: string;
  /** Whether the selector options should be disabled. */
  disabled?: boolean;
  onChange?: (label: string, value: number) => void;
}

/**
 * Builds a Selector with ModifierSelectorOptions from an array of options.
 */
function ModifierSelector({
  label,
  options,
  selected,
  disabled,
  onChange = () => {},
  ...props
}: ModifierSelectorProps) {
  const currentSelection = selected ?? options[0].label;
  return (
    <Selector label={label} {...props}>
      {options.map((option) => (
        <ModifierSelectorOption
          key={option.label}
          checked={option.label === currentSelection}
          disabled={disabled}
          onChange={onChange}
          {...option}
        />
      ))}
    </Selector>
  );
}

export default ModifierSelector;
