import React from "react";
import { ModifierToggleExtensionProps } from "utils/modifiers";
import ModifierToggle from "components/ui/ModifierToggle/ModifierToggle";

export const modifier = { label: "Prone in an adjacent hex", value: -2 };

/**
 * Is the target prone in an adjacent hex?
 */
function TargetProneAdjacent(props: ModifierToggleExtensionProps) {
  return <ModifierToggle {...props} {...modifier} />;
}

export default TargetProneAdjacent;
