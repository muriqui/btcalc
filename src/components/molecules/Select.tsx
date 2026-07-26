import Label from "../atoms/Label";
import { type SelectHTMLAttributes, useId } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** The select box label. */
  label: string;
  /** Set this to true to omit the drop shadow below the select element. */
  noShadow?: boolean;
}

/**
 * A form select field.
 */
export default function Select({
  label,
  noShadow,
  className = "",
  children,
  ...props
}: SelectProps) {
  const id = useId();
  return (
    <div
      className={`w-fit rounded-md pt-2.5 pr-1 pb-1.5 pl-3 ${noShadow ? "" : "shadow-xs"} ring-1 ring-gray-300 ring-inset focus-within:ring-2 focus-within:ring-amber-600 dark:bg-black ${className}`.trim()}
    >
      <Label htmlFor={id} className="text-xs">
        {label}
      </Label>
      <select
        id={id}
        className="relative block w-full rounded-none rounded-b-md border-0 bg-transparent py-0 pl-0 leading-6 text-gray-900 placeholder:text-gray-400 focus:z-10 focus:ring-0 dark:bg-black dark:text-gray-200"
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
