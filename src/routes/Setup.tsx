import UnitSetup from "../components/organisms/UnitSetup";
import OpponentSetup from "../components/organisms/OpponentSetup";
import ButtonLink from "../components/atoms/ButtonLink";
import Heading from "../components/atoms/Heading";

/**
 * The setup page.
 */
export default function Setup() {
  return (
    <div className="max-w-5xl pb-12 pt-6 sm:pb-24 sm:pt-12 lg:mx-auto">
      <Heading level={1}>Set up a game</Heading>

      <section className="my-6 max-w-2xl sm:my-12">
        <Heading level={2}>My units</Heading>
        <UnitSetup />
      </section>

      <section className="my-6 max-w-2xl sm:my-12">
        <Heading level={2}>Opposing units</Heading>
        <OpponentSetup />
      </section>

      <div className="my-6 flex justify-center sm:my-12">
        <ButtonLink to="/play" className="inline-block">
          Start game
        </ButtonLink>
      </div>
    </div>
  );
}
