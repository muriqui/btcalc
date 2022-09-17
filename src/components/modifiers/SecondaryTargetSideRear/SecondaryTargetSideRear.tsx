import React from "react";
import ModifierToggle, {
  ModifierToggleExtensionProps,
} from "components/ui/ModifierToggle/ModifierToggle";

export const label = "Secondary target in side or rear arc";
export const modifier = { label, value: 2 };

/**
 * Is this a secondary target in the attacker's side or rear arc?
 */
function SecondaryTargetSideRear(props: ModifierToggleExtensionProps) {
  return <ModifierToggle {...props} {...modifier} />;
}

export default SecondaryTargetSideRear;
