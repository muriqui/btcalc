import React from "react";
import ModifierToggle, {
  ModifierToggleExtensionProps,
} from "components/ui/ModifierToggle/ModifierToggle";

export const label = "Shoulder hit";
export const modifier = { label, value: 4 };

/**
 * Has the attacker taken a shoulder hit?
 */
function ShoulderHit(props: ModifierToggleExtensionProps) {
  return <ModifierToggle {...props} {...modifier} />;
}

export default ShoulderHit;
