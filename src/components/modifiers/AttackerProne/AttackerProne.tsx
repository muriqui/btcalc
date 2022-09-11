import React from "react";
import ModifierToggle, {
  ModifierToggleProps,
} from "components/ui/ModifierToggle/ModifierToggle";

export interface AttackerProneProps
  extends Omit<
    ModifierToggleProps,
    "label" | "description" | "value" | "onChange"
  > {
  onChange?: (label: string, value?: number) => void;
}

const modifier = { label: "Prone", value: 2 };

function AttackerProne({
  checked,
  disabled,
  onChange = () => {},
  ...props
}: AttackerProneProps) {
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

export default AttackerProne;
