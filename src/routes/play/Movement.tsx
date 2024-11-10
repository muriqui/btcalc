import { useLoaderData } from "react-router-dom";
import Heading from "../../components/atoms/Heading";
import ButtonLink from "../../components/atoms/ButtonLink";
import { loaderMovement } from "../../services/loaders";

import { setStep } from "../../services/utilityService";
import { Step } from "../../types";

/**
 * The Movement page.
 */
export default function Movement() {
  const { units, opponents } = useLoaderData() as Awaited<
    ReturnType<typeof loaderMovement>
  >;

  return (
    <>
      <Heading level={1} className="mb-4 mt-8">
        Movement
      </Heading>
      <p>Select a unit to resolve its movement.</p>

      <section className="my-16">
        <Heading level={2} className="mb-8">
          My units
        </Heading>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          {units.map((unit) => (
            <div key={unit.id}>{unit.name}</div>
          ))}
        </div>
      </section>

      <section className="my-16">
        <Heading level={2} className="mb-8">
          Opposing units
        </Heading>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          {opponents.map((opponent) => (
            <div key={opponent.id}>{opponent.name}</div>
          ))}
        </div>
      </section>

      <div className="flex justify-center lg:col-span-12">
        <ButtonLink
          to={`/play/${Step.SelectTargets}`}
          onClick={() => setStep(Step.SelectTargets)}
          className="mt-2 w-full max-w-96 text-center text-lg"
        >
          Next: Select targets
        </ButtonLink>
      </div>
    </>
  );
}
