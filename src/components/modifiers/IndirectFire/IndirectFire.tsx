import React from "react";
import ModifierToggle, {
  ModifierToggleExtensionProps,
} from "components/ui/ModifierToggle/ModifierToggle";

export const label = "Making an indirect fire attack";
export const modifier = { label, value: 1 };

/**
 * Is the attacker using indirect fire?
 */
function IndirectFire(props: ModifierToggleExtensionProps) {
  return <ModifierToggle {...props} {...modifier} />;
}

export default IndirectFire;
