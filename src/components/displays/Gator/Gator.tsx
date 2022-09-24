import React, { useState } from "react";
import { totalModifiers, summarizeModifiers } from "utils/modifiers";
import GunnerySkill from "components/modifiers/GunnerySkill/GunnerySkill";
import AttackerMovementModifier from "components/calculators/AttackerMovementModifier/AttackerMovementModifier";
import TargetMovementModifier from "components/calculators/TargetMovementModifier/TargetMovementModifier";
import OtherModifiers from "components/calculators/OtherModifiers/OtherModifiers";
import RangeModifier from "components/calculators/RangeModifier/RangeModifier";
import Disclosure from "components/ui/Disclosure/Disclosure";
import Result from "components/ui/Result/Result";

/**
 * Implements the GATOR method.
 */
function Gator() {
  const [gunnery, setGunnery] = useState(4);
  const [attacker, setAttacker] = useState(new Map());
  const [target, setTarget] = useState(new Map());
  const [other, setOther] = useState(new Map());
  const [range, setRange] = useState(new Map());

  const total =
    gunnery +
    totalModifiers(attacker) +
    totalModifiers(target) +
    totalModifiers(other) +
    totalModifiers(range);

  return (
    <main className="h-full pb-14">
      <section className="h-full space-y-4 overflow-auto px-4">
        <h2 className="sr-only">Calculations</h2>
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
        <Disclosure
          summary="Other modifiers"
          description={summarizeModifiers(other) || "None"}
        >
          <OtherModifiers
            selected={other}
            onChange={(selected) => setOther(selected)}
          />
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
      </section>
      <section className="fixed inset-x-0 bottom-0 z-10">
        <Result value={total} />
      </section>
    </main>
  );
}

export default Gator;
