import React from "react";
import Modifier from "components/ui/Modifier/Modifier";
import Toggle, { ToggleProps } from "components/ui/Toggle/Toggle";

export interface ModifierToggleProps
  extends Omit<ToggleProps, "children" | "onChange"> {
  /** The modifier value. */
  value: number;
  onChange?: (label: string, value?: number) => void;
}

/**
 * A toggle switch for a modifier.
 */
function ModifierToggle({
  label,
  description,
  value,
  checked,
  disabled,
  onChange = () => {},
  ...props
}: ModifierToggleProps) {
  const handleChange = (checked: boolean) =>
    checked ? onChange(label, value) : onChange(label);

  return (
    <Toggle
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
        onClick={() => handleChange(!checked)}
        className={`${
          disabled || !checked ? "pointer-events-none" : "cursor-pointer"
        } flex-none leading-none`}
      />
    </Toggle>
  );
}

export default ModifierToggle;

/**
 * Props for components that extend ModifierToggle.
 */
export interface ModifierToggleExtensionProps
  extends Omit<ModifierToggleProps, "label" | "description" | "value"> {}
