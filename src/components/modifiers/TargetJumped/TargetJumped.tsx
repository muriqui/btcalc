import React from "react";
import ModifierToggle, {
  ModifierToggleProps,
} from "components/ui/ModifierToggle/ModifierToggle";

export interface TargetJumpedProps
  extends Omit<
    ModifierToggleProps,
    "label" | "description" | "value" | "onChange"
  > {
  onChange?: (label: string, value?: number) => void;
}

const modifier = { label: "Jumped", value: 1 };

function TargetJumped({
  checked,
  disabled,
  onChange = () => {},
  ...props
}: TargetJumpedProps) {
  const handleChange = (checked: boolean) =>
    checked
      ? onChange(modifier.label, modifier.value)
      : onChange(modifier.label);

  return (
    <ModifierToggle
      checked={checked}
      disabled={disabled}
      onChange={handleChange}
      {...props}
      {...modifier}
    />
  );
}

export default TargetJumped;
