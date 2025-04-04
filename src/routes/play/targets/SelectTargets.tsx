import { useLoaderData } from "react-router";
import Heading from "../../../components/atoms/Heading";
import ButtonLink from "../../../components/atoms/ButtonLink";
import { getUnits, setStep } from "../../../services/utilityService";
import { Step } from "../../../types";

export async function clientLoader() {
  const units = await getUnits();
  return { units };
}

/**
 * The target selection page.
 */
export default function SelectTargets() {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const { units } = useLoaderData() as Awaited<ReturnType<typeof clientLoader>>;

  return (
    <>
      <Heading level={1} className="mb-4 mt-8">
        Select Targets
      </Heading>

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
