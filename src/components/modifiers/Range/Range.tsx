import React from "react";
import ModifierSelector, {
  ModifierSelectorExtensionProps,
} from "components/ui/ModifierSelector/ModifierSelector";

export const label = "Range";
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
  return <ModifierSelector label={label} options={options} {...props} />;
}

export default Range;
