import React from "react";
import ModifierToggle, {
  ModifierToggleExtensionProps,
} from "components/ui/ModifierToggle/ModifierToggle";

export const label = "Prone";
export const modifier = { label, value: 2 };

/**
 * Is the attacker prone?
 */
function AttackerProne(props: ModifierToggleExtensionProps) {
  return <ModifierToggle {...props} {...modifier} />;
}

export default AttackerProne;
