import React from "react";
import ModifierToggle, {
  ModifierToggleExtensionProps,
} from "components/ui/ModifierToggle/ModifierToggle";

export const label =
  "Making an indirect fire attack and the spotter also attacked this turn";
export const modifier = { label, value: 2 };

/**
 * Is the attacker using indirect fire while the spotter also attacks?
 */
function IndirectFireSpotterAttacked(props: ModifierToggleExtensionProps) {
  return <ModifierToggle {...props} {...modifier} />;
}

export default IndirectFireSpotterAttacked;
