import React, { useId } from "react";
import Label from "components/ui/Label/Label";

export interface NumberInputProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
  /** The input label. */
  label: string;
  /** The current value. */
  value?: number;
  /** The minimum value. */
  min?: number;
  /** The maximum value. */
  max?: number;
  onChange?: (value: number) => void;
}

/**
 * A number input.
 */
function NumberInput({
  label,
  value = 0,
  min,
  max,
  onChange = () => {},
  ...props
}: NumberInputProps) {
  const id = useId();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange(parseInt(event.target.value, 10));

  return (
    <div className="px-5 py-4 text-sm" {...props}>
      <Label htmlFor={`${id}-input`}>{label}</Label>
      <input
        type="number"
        id={`${id}-input`}
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
        className="w-full rounded border border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-gray-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-white focus-within:ring-opacity-60 focus-within:ring-offset-2 focus-within:ring-offset-sky-300"
      />
    </div>
  );
}

export default NumberInput;
