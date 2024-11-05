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

  // Check whether every unit on both teams has a name.
  const allNamed =
    units.every((unit) => unit.name?.length ?? 0 > 0) &&
    opponents.every((opponent) => opponent.name?.length ?? 0 > 0);

  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-4 pb-12 pt-6 sm:gap-y-6 lg:grid-cols-12">
      <Heading level={1} className="mb-4 mt-2 lg:col-span-12">
        Set up a game
      </Heading>

      <section className="-mr-4 lg:col-span-7 lg:mr-0">
        <Heading level={2}>My units</Heading>
        <UnitSetup
          units={units}
          onAddUnit={addUnit}
          onUpdateUnit={updateUnit}
          onDeleteUnit={deleteUnit}
        />
      </section>

      <section className="-mr-4 lg:col-span-4 lg:col-end-13">
        <Heading level={2}>Opposing units</Heading>
        <OpponentSetup
          opponents={opponents}
          onAddOpponent={addOpponent}
          onUpdateOpponent={updateOpponent}
          onDeleteOpponent={deleteOpponent}
        />
      </section>

      <div className="flex justify-center lg:col-span-12">
        <ButtonLink
          to="/play"
          isDisabled={!allNamed}
          className="mt-2 w-full max-w-96 text-center text-lg"
        >
          Start game
        </ButtonLink>
      </div>
      {!allNamed && (
        <div className="flex justify-center lg:col-span-12">
          All units and opponents must be named.
        </div>
      )}
    </div>
  );
}
