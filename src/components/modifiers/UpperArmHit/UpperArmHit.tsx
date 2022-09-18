import React from "react";
import ModifierToggle, {
  ModifierToggleExtensionProps,
} from "components/ui/ModifierToggle/ModifierToggle";

export const label = "Upper arm actuator hit";
export const modifier = { label, value: 1 };

/**
 * Has the attacker taken an upper arm actuator hit?
 */
function UpperArmHit(props: ModifierToggleExtensionProps) {
  return <ModifierToggle {...props} {...modifier} />;
}

export default UpperArmHit;
