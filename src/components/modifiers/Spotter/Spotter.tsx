import React from "react";
import ModifierToggle, {
  ModifierToggleExtensionProps,
} from "components/ui/ModifierToggle/ModifierToggle";

export const label = "Spotting for indirect fire";
export const modifier = { label, value: 1 };

/**
 * Is the attacker also spotting for indirect fire?
 */
function Spotter(props: ModifierToggleExtensionProps) {
  return <ModifierToggle {...props} {...modifier} />;
}

export default Spotter;
