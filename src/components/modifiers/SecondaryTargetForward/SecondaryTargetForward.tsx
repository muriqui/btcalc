import React from "react";
import ModifierToggle, {
  ModifierToggleExtensionProps,
} from "components/ui/ModifierToggle/ModifierToggle";

export const label = "Secondary target in forward arc";
export const modifier = { label, value: 1 };

/**
 * Is this a secondary target in the attacker's forward arc?
 */
function SecondaryTargetForward(props: ModifierToggleExtensionProps) {
  return <ModifierToggle {...props} {...modifier} />;
}

export default SecondaryTargetForward;
