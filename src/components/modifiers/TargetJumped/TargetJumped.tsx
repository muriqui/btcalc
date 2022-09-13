import React from "react";
import ModifierToggle, {
  ModifierToggleExtensionProps,
} from "components/ui/ModifierToggle/ModifierToggle";

export const label = "Jumped";
export const modifier = { label, value: 1 };

/**
 * Did the target jump?
 */
function TargetJumped(props: ModifierToggleExtensionProps) {
  return <ModifierToggle {...props} {...modifier} />;
}

export default TargetJumped;
