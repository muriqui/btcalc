import Label from "../atoms/Label";
import { type InputHTMLAttributes, useId } from "react";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** The input label. */
  label: string;
  /** Set this to true to omit the drop shadow below the input element. */
  noShadow?: boolean;
}

/**
 * A checkbox.
 */
export default function Checkbox({
  label,
  noShadow,
  className = "",
  ...props
}: CheckboxProps) {
  const id = useId();
  return (
    <div
      className={`flex items-center rounded-md px-3 focus-within:ring-2 focus-within:ring-amber-600 ${className}`.trim()}
    >
      <input
        id={id}
        type="checkbox"
        className={`flex-none rounded-sm p-2.5 text-amber-800 hover:cursor-pointer focus:ring-0 dark:text-amber-700 ${noShadow ? "" : "shadow-xs"}`.trim()}
        {...props}
      />
      <Label
        htmlFor={id}
        className="flex-1 px-2.5 text-sm hover:cursor-pointer"
      >
        {label}
      </Label>
    </div>
  );
}
