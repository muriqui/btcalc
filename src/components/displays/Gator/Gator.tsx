import React, { useState } from "react";
import { totalModifiers } from "utils/modifiers";
import GunnerySkill from "components/modifiers/GunnerySkill/GunnerySkill";
import AttackerMovementModifier from "components/calculators/AttackerMovementModifier/AttackerMovementModifier";
import TargetMovementModifier from "components/calculators/TargetMovementModifier/TargetMovementModifier";
import RangeModifier from "components/calculators/RangeModifier/RangeModifier";

/**
 * Implements the GATOR method.
 */
function Gator({ ...props }: React.ComponentPropsWithoutRef<"div">) {
  const [gunnery, setGunnery] = useState(4);
  const [attacker, setAttacker] = useState(new Map());
  const [target, setTarget] = useState(new Map());
  const [range, setRange] = useState(new Map());

  const total =
    gunnery +
    totalModifiers(attacker) +
    totalModifiers(target) +
    totalModifiers(range);

  return (
    <div {...props}>
      <div>
        Total:{" "}
        {total <= 2 ? "Automatic hit" : total > 12 ? "Impossible" : total}
      </div>
      <GunnerySkill
        value={gunnery}
        onChange={(label, value) => setGunnery(value)}
      />
      <AttackerMovementModifier
        selected={attacker}
        onChange={(selected) => setAttacker(selected)}
      />
      <TargetMovementModifier
        selected={target}
        onChange={(selected) => setTarget(selected)}
      />
      <div>@todo "Other" coming soon because it's complicated.</div>
      <RangeModifier
        selected={range}
        onChange={(selected) => setRange(selected)}
      />
    </div>
  );
}

export default Gator;
