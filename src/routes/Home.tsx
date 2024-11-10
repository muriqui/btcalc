import { useLoaderData } from "react-router-dom";
import CallToAction from "../components/molecules/CallToAction";
import { clearStorage } from "../services/utilityService";
import { loaderHome } from "../services/loaders";

/**
 * The home page.
 */
export default function Home() {
  const { step } = useLoaderData() as Awaited<ReturnType<typeof loaderHome>>;

  // Properties for a secondary action link only shown when there is a game in local storage.
  const secondaryProps = step
    ? {
        secondaryText: "Continue your last game",
        secondaryTo: `/play/${step}`,
      }
    : {};

  return (
    <div className="grid min-h-full place-items-center py-24 sm:py-32">
      <CallToAction
        heading="BTcalc"
        primaryText="Set up a new game"
        primaryTo="/play"
        primaryOnClick={clearStorage}
        body="A BattleTech shot calculator"
        {...secondaryProps}
      />
    </div>
  );
}
