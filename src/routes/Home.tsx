import CallToAction from "../components/molecules/CallToAction";

/**
 * The home page.
 */
export default function Home() {
  const secondaryProps = localStorage.length
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
        primaryOnClick={() => localStorage.clear()}
        body="A BattleTech shot calculator"
        {...secondaryProps}
      />
    </div>
  );
}
