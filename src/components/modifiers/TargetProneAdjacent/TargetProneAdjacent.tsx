import React from "react";
import ModifierToggle, {
  ModifierToggleExtensionProps,
} from "components/ui/ModifierToggle/ModifierToggle";

export const label = "Prone in an adjacent hex";
export const modifier = { label, value: -2 };

/**
 * Is the target prone in an adjacent hex?
 */
function TargetProneAdjacent(props: ModifierToggleExtensionProps) {
  return <ModifierToggle {...props} {...modifier} />;
}

export default TargetProneAdjacent;
