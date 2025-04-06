import Label from "../atoms/Label";
import { type InputHTMLAttributes, useId } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** The input label. */
  label: string;
  /** Set this to true to omit the drop shadow below the input element. */
  noShadow?: boolean;
}

/**
 * A form input field.
 */
export default function Input({
  label,
  noShadow,
  className = "",
  ...props
}: InputProps) {
  const id = useId();
  return (
    <div
      className={`rounded-md px-3 pt-2.5 pb-1.5 ${noShadow ? "" : "shadow-xs"} ring-1 ring-gray-300 ring-inset focus-within:ring-2 focus-within:ring-amber-600 dark:bg-black ${className}`.trim()}
    >
      <Label htmlFor={id} className="text-xs">
        {label}
      </Label>
      <input
        id={id}
        className="block w-full border-0 p-0 leading-6 text-gray-900 placeholder:text-gray-400 focus:ring-0 dark:bg-black dark:text-gray-200"
        {...props}
      />
    </div>
  );
}
