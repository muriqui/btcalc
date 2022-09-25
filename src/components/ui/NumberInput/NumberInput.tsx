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
  /** Whether the input is disabled (unable to accept input). */
  disabled?: boolean;
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
  disabled,
  onChange = () => {},
  ...props
}: NumberInputProps) {
  const id = useId();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange(parseInt(event.target.value, 10));

  return (
    <div className="mx-5 my-4 space-y-2" {...props}>
      <Label htmlFor={`${id}-input`}>{label}</Label>
      <input
        type="number"
        id={`${id}-input`}
        value={value}
        min={min}
        max={max}
        disabled={disabled}
        onChange={handleChange}
        className={`${
          disabled
            ? "cursor-not-allowed bg-transparent opacity-60"
            : "bg-white text-slate-900 dark:bg-black dark:text-slate-300"
        } w-full rounded border border-slate-300 bg-clip-padding px-3 py-1.5 selection:bg-amber-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-amber-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-100 dark:selection:text-slate-900 dark:focus-within:ring-amber-400 dark:focus-within:ring-offset-slate-900`}
      />
    </div>
  );
}

export default NumberInput;
