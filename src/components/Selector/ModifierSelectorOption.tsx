import React from "react";
import Modifier from "components/Modifier/Modifier";
import SelectorOption, {
  SelectorOptionProps,
} from "components/Selector/SelectorOption";

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
      <div className={disabled ? "pointer-events-none" : "cursor-pointer"}>
        <Modifier
          value={value}
          hidden={disabled || !checked}
          darkBackground={!disabled && checked}
        />
      </div>
    </SelectorOption>
  );
}

export default ModifierSelectorOption;
