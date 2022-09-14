import React, { useState } from "react";
import { totalModifiers, summarizeModifiers } from "utils/modifiers";
import GunnerySkill from "components/modifiers/GunnerySkill/GunnerySkill";
import AttackerMovementModifier from "components/calculators/AttackerMovementModifier/AttackerMovementModifier";
import TargetMovementModifier from "components/calculators/TargetMovementModifier/TargetMovementModifier";
import RangeModifier from "components/calculators/RangeModifier/RangeModifier";
import Disclosure from "components/ui/Disclosure/Disclosure";

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
    <div className="space-y-2" {...props}>
      <div>
        Total:{" "}
        {total <= 2 ? "Automatic hit" : total > 12 ? "Impossible" : total}
      </div>
      <GunnerySkill
        value={gunnery}
        onChange={(label, value) => setGunnery(value)}
      />
      <Disclosure
        summary="Attacker movement modifier"
        description={summarizeModifiers(attacker) || "None"}
      >
        <AttackerMovementModifier
          selected={attacker}
          onChange={(selected) => setAttacker(selected)}
        />
      </Disclosure>
      <Disclosure
        summary="Target movement modifier"
        description={summarizeModifiers(target) || "None"}
      >
        <TargetMovementModifier
          selected={target}
          onChange={(selected) => setTarget(selected)}
        />
      </Disclosure>
      <Disclosure summary="Other modifiers" description="None">
        <div>@todo "Other" coming soon because it's complicated.</div>
      </Disclosure>
      <Disclosure
        summary="Range modifier"
        description={summarizeModifiers(range) || "None"}
      >
        <RangeModifier
          selected={range}
          onChange={(selected) => setRange(selected)}
        />
      </Disclosure>
    </div>
  );
}

export default Gator;
