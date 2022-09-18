import React from "react";
import ModifierToggle, {
  ModifierToggleExtensionProps,
} from "components/ui/ModifierToggle/ModifierToggle";

export const label = "Sensor hit";
export const modifier = { label, value: 2 };

/**
 * Has the attacker taken a sensor hit?
 */
function SensorHit(props: ModifierToggleExtensionProps) {
  return <ModifierToggle {...props} {...modifier} />;
}

export default SensorHit;
