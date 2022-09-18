import React from "react";
import ModifierToggle, {
  ModifierToggleExtensionProps,
} from "components/ui/ModifierToggle/ModifierToggle";

export const label = "Partial cover";
export const modifier = { label, value: 1 };

/**
 * Does the target have partial cover?
 */
function PartialCover(props: ModifierToggleExtensionProps) {
  return <ModifierToggle {...props} {...modifier} />;
}

export default PartialCover;
