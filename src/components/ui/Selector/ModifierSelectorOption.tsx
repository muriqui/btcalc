import React from "react";
import Modifier from "components/ui/Modifier/Modifier";
import SelectorOption, {
  SelectorOptionProps,
} from "components/ui/Selector/SelectorOption";

export interface ModifierSelectorOptionProps
  extends Omit<SelectorOptionProps, "children" | "onChange"> {
  /** The modifier value. */
  value: number;
  onChange?: (label: string, value: number) => void;
}

/**
 * An option in a ModifierSelector.
 */
function ModifierSelectorOption({
  label,
  description,
  value,
  checked,
  disabled,
  onChange = () => {},
  ...props
}: ModifierSelectorOptionProps) {
  const handleChange = () => onChange(label, value);
  return (
    <SelectorOption
      label={label}
      description={description}
      checked={checked}
      disabled={disabled}
      onChange={handleChange}
      {...props}
    >
      <Modifier
        value={value}
        hidden={disabled || !checked}
        className={`${
          disabled ? "pointer-events-none" : "cursor-pointer"
        } ml-4 flex-none`}
      />
    </SelectorOption>
  );
}

export default ModifierSelectorOption;
