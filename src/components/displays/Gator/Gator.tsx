import React, { useState, useId } from "react";
import { totalModifiers, summarizeModifiers } from "utils/modifiers";
import GunnerySkill from "components/modifiers/GunnerySkill/GunnerySkill";
import AttackerMovementModifier from "components/calculators/AttackerMovementModifier/AttackerMovementModifier";
import TargetMovementModifier from "components/calculators/TargetMovementModifier/TargetMovementModifier";
import OtherModifiers from "components/calculators/OtherModifiers/OtherModifiers";
import RangeModifier from "components/calculators/RangeModifier/RangeModifier";
import Tabs from "components/ui/Tabs/Tabs";
import Tab from "components/ui/Tabs/Tab";
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

  const id = useId();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="md:grid md:h-screen md:grid-cols-3 md:pt-12">
      <section className="fixed inset-x-0 bottom-0 top-24 overflow-y-auto md:static md:col-span-2 md:h-full md:border-r md:border-slate-300">
        <h2 className="sr-only">Calculations</h2>
        <form id={`${id}-form`} onSubmit={handleSubmit}>
          <Tabs>
            <Tab label="Gunnery" id={useId()} className="m-4">
              <GunnerySkill
                value={gunnery}
                onChange={(label, value) => setGunnery(value)}
              />
            </Tab>
            <Tab label="Attacker" id={useId()} className="m-4">
              <AttackerMovementModifier
                selected={attacker}
                onChange={(selected) => setAttacker(selected)}
              />
            </Tab>
            <Tab label="Target" id={useId()} className="m-4">
              <TargetMovementModifier
                selected={target}
                onChange={(selected) => setTarget(selected)}
              />
            </Tab>
            <Tab label="Other" id={useId()} className="m-4">
              <OtherModifiers
                selected={other}
                onChange={(selected) => setOther(selected)}
              />
            </Tab>
            <Tab label="Range" id={useId()} className="m-4">
              <RangeModifier
                selected={range}
                onChange={(selected) => setRange(selected)}
              />
            </Tab>
          </Tabs>
        </form>
      </section>
      <section className="fixed inset-x-0 top-12 z-10 h-12 md:static md:h-full md:overflow-y-auto md:border-slate-300">
        <h2 className="sr-only">Result</h2>
        <Result
          className="h-full w-full md:sticky md:top-0 md:h-12"
          value={total}
          form={`${id}-form`}
        />
        <div className="prose prose-slate m-4 hidden dark:prose-invert md:block">
          <h3>Gunnery</h3>
          <p>Base target number {gunnery}</p>
          <h3>Attacker</h3>
          <p>{summarizeModifiers(attacker) || "None"}</p>
          <h3>Target</h3>
          <p>{summarizeModifiers(target) || "None"}</p>
          <h3>Other</h3>
          <p>{summarizeModifiers(other) || "None"}</p>
          <h3>Range</h3>
          <p>{summarizeModifiers(range) || "None"}</p>
        </div>
      </section>
    </main>
  );
}

export default Gator;
