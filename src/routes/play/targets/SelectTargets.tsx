import Heading from "../../../components/atoms/Heading";
import ButtonLink from "../../../components/atoms/ButtonLink";
import { getUnits, setStep } from "../../../services/utilityService";
import { Step } from "../../../types";
import type { Route } from "./+types/SelectTargets";

export async function clientLoader() {
  const units = await getUnits();
  return { units };
}

/**
 * The target selection page.
 */
export default function SelectTargets({
  loaderData,
}: Pick<Route.ComponentProps, "loaderData">) {
  const { units } = loaderData;

  return (
    <>
      <Heading level={1} className="mt-8 mb-4">
        Select Targets
      </Heading>
      <p className="mb-8">Select a unit to designate its target.</p>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {units.map((unit) => (
          <ButtonLink
            variant="outlined"
            key={unit.id}
            to={`/play/${Step.SelectTargets}/unit/${unit.id}`}
          >
            {unit.name}
          </ButtonLink>
        ))}
      </div>

      <div className="flex justify-center">
        <ButtonLink
          variant="primary"
          to={`/play/${Step.ResolveWeapons}`}
          onClick={() => setStep(Step.ResolveWeapons)}
          className="mt-2 w-full max-w-96 text-center text-lg"
        >
          Next: Resolve weapon attacks
        </ButtonLink>
      </div>
    </>
  );
}
