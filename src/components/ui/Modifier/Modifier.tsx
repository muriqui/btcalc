import React from "react";
import { formatModifier } from "utils/modifiers";

export interface ModifierProps extends React.ComponentPropsWithoutRef<"div"> {
  /** The modifier value. */
  value: number;
  /** Whether the component is visually hidden. */
  hidden?: boolean;
}

/**
 * Displays a modifier value.
 */
function Modifier({ value, hidden, ...props }: ModifierProps) {
  return (
    <div {...props}>
      <span
        className={`${
          hidden || value === 0 ? "invisible" : ""
        } inline-flex h-6 min-w-[2.5rem] items-center justify-center rounded-full bg-amber-900 px-2 text-xs font-semibold text-white`}
      >
        {formatModifier(value)}
      </span>
    </div>
  );
}

export default Modifier;
