import React from "react";
import ModifierToggle, {
  ModifierToggleExtensionProps,
} from "components/ui/ModifierToggle/ModifierToggle";

export const label = "Prone";
export const modifier = { label, value: 1 };

/**
 * Is the target prone?
 */
function TargetProne(props: ModifierToggleExtensionProps) {
  return <ModifierToggle {...props} {...modifier} />;
}

export default TargetProne;
