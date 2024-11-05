import { LabelHTMLAttributes } from "react";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

/**
 * A form input label.
 */
export default function Label({
  className = "",
  children,
  ...props
}: LabelProps) {
  return (
    <label className={`block font-medium ${className}`.trim()} {...props}>
      {children}
    </label>
  );
}
