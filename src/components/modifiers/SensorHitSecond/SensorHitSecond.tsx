import React from "react";
import ModifierToggle, {
  ModifierToggleExtensionProps,
} from "components/ui/ModifierToggle/ModifierToggle";

export const label = "Second sensor hit";
export const modifier = { label, value: Infinity };

/**
 * Has the attacker taken a second sensor hit?
 */
function SensorHitSecond(props: ModifierToggleExtensionProps) {
  return <ModifierToggle {...props} {...modifier} />;
}

export default SensorHitSecond;
