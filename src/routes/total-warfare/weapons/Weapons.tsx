import Heading from "../../components/atoms/Heading";
import ButtonLink from "../../components/atoms/ButtonLink";
import { getPlayerUnits, setStep } from "../../services/utilityService";
import { System, Step } from "../../types";
import type { Route } from "./+types/Weapons";

export async function clientLoader() {
  const units = await getPlayerUnits();
  return { units };
}

/**
 * The weapon attacks page.
 */
export default function SelectTargets({
  loaderData,
}: Pick<Route.ComponentProps, "loaderData">) {
  const { units } = loaderData;

  return (
    <>
      <Heading level={1} className="mt-8 mb-4">
        Weapon Attacks
      </Heading>
      <p className="mb-8">Select a unit to designate its target.</p>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {units.map((unit) => (
          <ButtonLink
            variant="outlined"
            key={unit.id}
            to={`/${System.TotalWarfare}/${Step.Weapons}/unit/${unit.id}`}
          >
            {unit.name}
          </ButtonLink>
        ))}
      </div>

      <div className="flex justify-center">
        <ButtonLink
          variant="primary"
          to={`/${System.TotalWarfare}/${Step.Physical}`}
          onClick={() => setStep(Step.Physical)}
          className="mt-2 w-full max-w-96 text-center text-lg"
        >
          Next: Physical attacks
        </ButtonLink>
      </div>
    </>
  );
}
