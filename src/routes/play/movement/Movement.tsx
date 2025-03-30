import { useLoaderData } from "react-router";
import Heading from "../../../components/atoms/Heading";
import ButtonLink from "../../../components/atoms/ButtonLink";
import playLoader from "../Play.loader";

import { setStep } from "../../../services/utilityService";
import { Step } from "../../../types";

/**
 * The movement page.
 */
export default function Movement() {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const { units, opponents } = useLoaderData() as Awaited<
    ReturnType<typeof playLoader>
  >;

  return (
    <>
      <Heading level={1} className="mb-4 mt-8">
        Movement
      </Heading>
      <p>Select a unit to resolve its movement.</p>

      <section className="my-8">
        <Heading level={2} className="mb-4">
          My units
        </Heading>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          {units.map((unit) => (
            <ButtonLink
              variant="outlined"
              key={unit.id}
              to={`/play/${Step.Movement}/unit/${unit.id}`}
            >
              {unit.name}
            </ButtonLink>
          ))}
        </div>
      </section>

      <section className="my-8">
        <Heading level={2} className="mb-4">
          Opposing units
        </Heading>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          {opponents.map((opponent) => (
            <ButtonLink
              variant="outlined"
              key={opponent.id}
              to={`/play/${Step.Movement}/opponent/${opponent.id}`}
            >
              {opponent.name}
            </ButtonLink>
          ))}
        </div>
      </section>

      <div className="flex justify-center lg:col-span-12">
        <ButtonLink
          variant="primary"
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
