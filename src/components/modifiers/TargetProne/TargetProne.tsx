import React from "react";
import { ModifierToggleExtensionProps } from "utils/modifiers";
import ModifierToggle from "components/ui/ModifierToggle/ModifierToggle";

export const modifier = { label: "Prone", value: 1 };

/**
 * Is the target prone?
 */
function TargetProne(props: ModifierToggleExtensionProps) {
  return <ModifierToggle {...props} {...modifier} />;
}

export default TargetProne;
