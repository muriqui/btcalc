import CallToAction from "../components/molecules/CallToAction";

/**
 * The home page.
 */
export default function Home() {
  return (
    <div className="grid min-h-full place-items-center py-24 sm:py-32">
      <CallToAction
        heading="BTcalc"
        primaryText="Start a new game"
        primaryTo="/setup"
        secondaryText="Continue your last game"
        secondaryTo="/play"
        body="A BattleTech shot calculator"
      />
    </div>
  );
}
