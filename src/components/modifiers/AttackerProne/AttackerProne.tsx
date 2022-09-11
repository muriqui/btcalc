import React from "react";
import { ModifierToggleExtensionProps } from "utils/modifiers";
import ModifierToggle from "components/ui/ModifierToggle/ModifierToggle";

export const modifier = { label: "Prone", value: 2 };

/**
 * Is the attacker prone?
 */
function AttackerProne(props: ModifierToggleExtensionProps) {
  return <ModifierToggle {...props} {...modifier} />;
}

export default AttackerProne;
