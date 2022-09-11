import React from "react";
import { ModifierToggleExtensionProps } from "utils/modifiers";
import ModifierToggle from "components/ui/ModifierToggle/ModifierToggle";

export const modifier = { label: "Jumped", value: 1 };

/**
 * Did the target jump?
 */
function TargetJumped(props: ModifierToggleExtensionProps) {
  return <ModifierToggle {...props} {...modifier} />;
}

export default TargetJumped;
