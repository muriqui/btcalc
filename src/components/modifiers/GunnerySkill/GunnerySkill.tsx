import React from "react";
import NumberInput, {
  NumberInputProps,
} from "components/ui/NumberInput/NumberInput";

export interface GunnerySkillProps
  extends Omit<NumberInputProps, "label" | "min" | "max" | "onChange"> {
  onChange?: (label: string, value: number) => void;
}

export const label = "Gunnery skill";

/**
 * The pilot's gunnery skill.
 */
function GunnerySkill({
  value = 4,
  onChange = () => {},
  ...props
}: GunnerySkillProps) {
  const handleChange = (value: number) => onChange(label, value);
  return (
    <NumberInput
      label={label}
      value={value}
      min={0}
      max={6}
      onChange={handleChange}
      {...props}
    />
  );
}

export default GunnerySkill;
