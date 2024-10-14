import { LabelHTMLAttributes } from "react";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

/**
 * A form input label.
 */
export default function Label({ className, children, ...props }: LabelProps) {
  return (
    <label
      className={`block font-medium text-gray-900 dark:text-gray-200${className ? " " + className : ""}`}
      {...props}
    >
      {children}
    </label>
  );
}
