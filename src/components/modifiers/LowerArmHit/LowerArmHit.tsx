import React from "react";
import ModifierToggle, {
  ModifierToggleExtensionProps,
} from "components/ui/ModifierToggle/ModifierToggle";

export const label = "Lower arm actuator hit";
export const modifier = { label, value: 1 };

/**
 * Has the attacker taken a lower arm actuator hit?
 */
function LowerArmHit(props: ModifierToggleExtensionProps) {
  return <ModifierToggle {...props} {...modifier} />;
}

export default LowerArmHit;
