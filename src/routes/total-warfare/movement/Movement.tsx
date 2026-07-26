import type { Route } from "./+types/Movement";
import Heading from "~/components/atoms/Heading";
import ButtonLink from "~/components/atoms/ButtonLink";
import {
  getOpponentUnits,
  getPlayerUnits,
  setStep,
} from "~/services/utilityService";
import { System, Step } from "~/types";

export async function clientLoader() {
  const units = await getPlayerUnits();
  const opponents = await getOpponentUnits();
  return { units, opponents };
}

/**
 * The movement page.
 */
export default function Movement({
  loaderData,
}: Pick<Route.ComponentProps, "loaderData">) {
  const { units, opponents } = loaderData;

  return (
    <>
      <Heading level={1} className="mt-8 mb-4">
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
              to={`/${System.TotalWarfare}/${Step.Movement}/unit/${unit.id}`}
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
              to={`/${System.TotalWarfare}/${Step.Movement}/opponent/${opponent.id}`}
            >
              {opponent.name}
            </ButtonLink>
          ))}
        </div>
      </section>

      <div className="flex justify-center lg:col-span-12">
        <ButtonLink
          variant="primary"
          to={`/${System.TotalWarfare}/${Step.Weapons}`}
          onClick={() => setStep(Step.Weapons)}
          className="mt-2 w-full max-w-96 text-center text-lg"
        >
          Next: Weapon attacks
        </ButtonLink>
      </div>
    </>
  );
}
