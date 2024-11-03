import useUnits from "../hooks/useUnits";
import useOpponents from "../hooks/useOpponents";
import UnitSetup from "../components/organisms/UnitSetup";
import OpponentSetup from "../components/organisms/OpponentSetup";
import ButtonLink from "../components/atoms/ButtonLink";
import Heading from "../components/atoms/Heading";

/**
 * The setup page.
 */
export default function Setup() {
  const [units, addUnit, updateUnit, deleteUnit] = useUnits();
  const [opponents, addOpponent, updateOpponent, deleteOpponent] =
    useOpponents();

  return (
    <div className="max-w-5xl pb-12 pt-6 sm:pb-24 sm:pt-12 lg:mx-auto">
      <Heading level={1}>Set up a game</Heading>

      <section className="my-6 max-w-2xl sm:my-12">
        <Heading level={2}>My units</Heading>
        <UnitSetup
          units={units}
          onAddUnit={addUnit}
          onUpdateUnit={updateUnit}
          onDeleteUnit={deleteUnit}
        />
      </section>

      <section className="my-6 max-w-2xl sm:my-12">
        <Heading level={2}>Opposing units</Heading>
        <OpponentSetup
          opponents={opponents}
          onAddOpponent={addOpponent}
          onUpdateOpponent={updateOpponent}
          onDeleteOpponent={deleteOpponent}
        />
      </section>

      <div className="my-6 flex justify-center sm:my-12">
        <ButtonLink to="/play" className="inline-block">
          Start game
        </ButtonLink>
      </div>
    </div>
  );
}
