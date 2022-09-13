import React from "react";
import ModifierToggle, {
  ModifierToggleExtensionProps,
} from "components/ui/ModifierToggle/ModifierToggle";

export const label = "Immobile";
export const modifier = { label, value: -4 };

/**
 * Is the target immobile?
 */
function TargetImmobile(props: ModifierToggleExtensionProps) {
  return <ModifierToggle {...props} {...modifier} />;
}

export default TargetImmobile;
