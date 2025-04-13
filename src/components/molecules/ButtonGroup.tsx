import type { HTMLAttributes } from "react";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Horizontal alignment; default is 'center'. */
  align?: "left" | "center";
}

/**
 * A container for grouping buttons together.
 */
export default function ButtonGroup({
  align = "center",
  className = "",
  children,
  ...props
}: ButtonGroupProps) {
  return (
    <div
      className={`flex flex-col items-center gap-x-6 gap-y-6 sm:flex-row ${align === "center" ? "justify-center" : ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
