import React from "react";
import ModifierSelector, {
  ModifierSelectorExtensionProps,
} from "components/ui/ModifierSelector/ModifierSelector";

export const options = [
  {
    label: "Short",
    value: 0,
  },
  {
    label: "Medium",
    value: 2,
  },
  {
    label: "Long",
    value: 4,
  },
];

/**
 * The target's range.
 */
function Range(props: ModifierSelectorExtensionProps) {
  return <ModifierSelector label="Range" options={options} {...props} />;
}

export default Range;
