import React from "react";
import ModifierSelector, {
  ModifierSelectorExtensionProps,
} from "components/ui/ModifierSelector/ModifierSelector";

export const label = "Hexes moved";
export const options = [
  {
    label: "Moved 0–2 hexes",
    value: 0,
  },
  {
    label: "Moved 3–4 hexes",
    value: 1,
  },
  {
    label: "Moved 5–6 hexes",
    value: 2,
  },
  {
    label: "Moved 7–9 hexes",
    value: 3,
  },
  {
    label: "Moved 10–17 hexes",
    value: 4,
  },
  {
    label: "Moved 18–24 hexes",
    value: 5,
  },
  {
    label: "Moved 25+ hexes",
    value: 6,
  },
];

/**
 * The number of hexes that the target moved.
 */
function TargetHexesMoved(props: ModifierSelectorExtensionProps) {
  return <ModifierSelector label={label} options={options} {...props} />;
}

export default TargetHexesMoved;
