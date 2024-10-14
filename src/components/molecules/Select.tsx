import Label from "../atoms/Label";
import { SelectHTMLAttributes, useId } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** The select box label. */
  label: string;
}

/**
 * A form select field.
 */
export default function Select({
  label,
  className,
  children,
  ...props
}: SelectProps) {
  const id = useId();
  return (
    <div
      className={`rounded-md pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-amber-600 dark:bg-black${className ? " " + className : ""}`}
    >
      <Label htmlFor={id} className="px-3 text-xs">
        {label}
      </Label>
      <select
        id={id}
        className="relative ml-3 mr-[2px] block rounded-none rounded-b-md border-0 bg-transparent py-0 pl-0 leading-6 text-gray-900 placeholder:text-gray-400 focus:z-10 focus:ring-0 dark:bg-black dark:text-gray-200"
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
