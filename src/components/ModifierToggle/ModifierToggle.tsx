import React from "react";
import Modifier from "components/Modifier/Modifier";
import Toggle, { ToggleProps } from "components/Toggle/Toggle";

export interface ModifierToggleProps extends Omit<ToggleProps, "children"> {
  /** The modifier value. */
  value: number;
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
  return (
    <Toggle
      label={label}
      description={description}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      {...props}
    >
      <div
        className={
          disabled || !checked ? "pointer-events-none" : "cursor-pointer"
        }
      >
        <Modifier
          value={value}
          hidden={disabled || !checked}
          onClick={() => onChange(!checked)}
        />
      </div>
    </Toggle>
  );
}

export default ModifierToggle;
