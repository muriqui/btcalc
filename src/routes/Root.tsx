import CallToAction from "../components/molecules/CallToAction";

export default function Root() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <CallToAction
        heading="BTcalc"
        primaryText="Start a new game"
        primaryTo="/setup"
        secondaryText="Continue your last game"
        secondaryTo="/play"
        body="A BattleTech shot calculator"
      />
    </main>
  );
}
