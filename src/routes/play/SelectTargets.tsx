import { useLoaderData } from "react-router-dom";
import Heading from "../../components/atoms/Heading";
import { loaderSelectTargets } from "../../services/loaders";

/**
 * The Select Targets page.
 */
export default function SelectTargets() {
  const { units } = useLoaderData() as Awaited<
    ReturnType<typeof loaderSelectTargets>
  >;

  return (
    <>
      <Heading level={1} className="mb-4 mt-8">
        Select Targets
      </Heading>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {units.map((unit) => (
          <div key={unit.id}>{unit.name}</div>
        ))}
      </div>
    </>
  );
}
