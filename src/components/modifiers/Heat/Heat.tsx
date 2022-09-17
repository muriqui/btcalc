import React from "react";
import ModifierSelector, {
  ModifierSelectorExtensionProps,
} from "components/ui/ModifierSelector/ModifierSelector";

export const label = "Heat";
export const options = [
  {
    label: "0–7 heat",
    value: 0,
  },
  {
    label: "8–12 heat",
    value: 1,
  },
  {
    label: "13–16 heat",
    value: 2,
  },
  {
    label: "17–23 heat",
    value: 3,
  },
  {
    label: "24+ heat",
    value: 4,
  },
];

/**
 * The attacker's current heat.
 */
function Heat(props: ModifierSelectorExtensionProps) {
  return <ModifierSelector label={label} options={options} {...props} />;
}

export default Heat;
