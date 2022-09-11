import React from "react";
import ModifierToggle, {
  ModifierToggleExtensionProps,
} from "components/ui/ModifierToggle/ModifierToggle";

export const modifier = { label: "Immobile", value: -4 };

/**
 * Is the target immobile?
 */
function TargetImmobile(props: ModifierToggleExtensionProps) {
  return <ModifierToggle {...props} {...modifier} />;
}

export default TargetImmobile;
