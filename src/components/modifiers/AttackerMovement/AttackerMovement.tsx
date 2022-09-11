import React from "react";
import { ModifierSelectorExtensionProps } from "utils/modifiers";
import ModifierSelector from "components/ui/ModifierSelector/ModifierSelector";

export const options = [
  {
    label: "Stationary",
    value: 0,
  },
  {
    label: "Walked",
    value: 1,
  },
  {
    label: "Ran",
    value: 2,
  },
  {
    label: "Jumped",
    value: 3,
  },
];

/**
 * The attacker's movement.
 */
function AttackerMovement(props: ModifierSelectorExtensionProps) {
  return <ModifierSelector label="Movement" options={options} {...props} />;
}

export default AttackerMovement;
