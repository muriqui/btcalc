import { HTMLAttributes } from "react";

export type LabelProps = HTMLAttributes<HTMLLabelElement>;

/**
 * A form input label.
 */
export default function Label({ className, children, ...props }: LabelProps) {
  return (
    <label
      className={`block font-medium leading-6 text-gray-900 dark:text-gray-200${className ? " " + className : ""}`}
      {...props}
    >
      {children}
    </label>
  );
}
