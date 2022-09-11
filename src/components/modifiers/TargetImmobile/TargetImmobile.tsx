import React from "react";
import ModifierToggle, {
  ModifierToggleProps,
} from "components/ui/ModifierToggle/ModifierToggle";

export interface TargetImmobileProps
  extends Omit<
    ModifierToggleProps,
    "label" | "description" | "value" | "onChange"
  > {
  onChange?: (label: string, value?: number) => void;
}

const modifier = { label: "Immobile", value: -4 };

function TargetImmobile({
  checked,
  disabled,
  onChange = () => {},
  ...props
}: TargetImmobileProps) {
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

export default TargetImmobile;
