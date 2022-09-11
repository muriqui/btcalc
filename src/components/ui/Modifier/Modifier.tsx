import React from "react";
import { formatModifier } from "utils/modifiers";

export interface ModifierProps extends React.ComponentPropsWithoutRef<"span"> {
  /** The modifier value. */
  value: number;
  /** Whether the component is visually hidden. */
  hidden?: boolean;
  /** Whether the component is against a dark background. */
  darkBackground?: boolean;
}

/**
 * Displays a modifier value.
 */
function Modifier({ value, hidden, darkBackground, ...props }: ModifierProps) {
  return (
    <span
      className={`${hidden || value === 0 ? "invisible" : ""} ${
        darkBackground ? "bg-white text-white" : "bg-black text-gray-900"
      } mx-2 inline-flex h-6 w-8 items-center justify-center rounded-full bg-opacity-20 text-xs font-bold`}
      {...props}
    >
      {formatModifier(value)}
    </span>
  );
}

export default Modifier;
