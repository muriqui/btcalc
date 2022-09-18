import React from "react";
import ModifierSelector, {
  ModifierSelectorExtensionProps,
} from "components/ui/ModifierSelector/ModifierSelector";

export const label = "Target in woods";
export const options = [
  {
    label: "Target is not in woods",
    value: 0,
  },
  {
    label: "Target is in light woods",
    value: 1,
  },
  {
    label: "Target is in heavy woods",
    value: 2,
  },
];

/**
 * Is the target in woods? If so, what type?
 */
function WoodsTargetHex(props: ModifierSelectorExtensionProps) {
  return <ModifierSelector label={label} options={options} {...props} />;
}

export default WoodsTargetHex;
