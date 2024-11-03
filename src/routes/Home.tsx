import CallToAction from "../components/molecules/CallToAction";
import { clearStorage, getStorage } from "../hooks/useLocalStorage";

/**
 * The home page.
 */
export default function Home() {
  // Properties for a secondary action link only shown when there is a game in local storage.
  const secondaryProps = getStorage("units", undefined)
    ? {
        secondaryText: "Continue your last game",
        secondaryTo: "/play",
      }
    : {};

  return (
    <div className="grid min-h-full place-items-center py-24 sm:py-32">
      <CallToAction
        heading="BTcalc"
        primaryText="Set up a new game"
        primaryTo="/setup"
        primaryOnClick={clearStorage}
        body="A BattleTech shot calculator"
        {...secondaryProps}
      />
    </div>
  );
}
