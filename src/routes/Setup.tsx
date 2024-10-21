import ButtonLink from "../components/atoms/ButtonLink";
import Heading from "../components/atoms/Heading";
import Input from "../components/molecules/Input";
import Select from "../components/molecules/Select";

/**
 * The setup page.
 */
export default function Setup() {
  const units = [
    { id: 1, name: "Atlas", gunnery: 3 },
    { id: 2, name: "Banshee", gunnery: 4 },
    { id: 3, name: "Catapult", gunnery: 4 },
    { id: 4, name: "Dervish", gunnery: 3 },
  ];

  const opponents = [
    { id: 1, name: "Enforcer" },
    { id: 2, name: "Fafnir" },
    { id: 3, name: "Grasshopper" },
    { id: 4, name: "Highlander" },
  ];

  const gunneryOptions = [
    { value: 0, name: "0 (Mythical)" },
    { value: 1, name: "1 (Legendary)" },
    { value: 2, name: "2 (Elite)" },
    { value: 3, name: "3 (Veteran)" },
    { value: 4, name: "4 (Regular)" },
    { value: 5, name: "5 (Green)" },
  ];

  return (
    <div className="max-w-5xl pb-12 pt-6 sm:pb-24 sm:pt-12 lg:mx-auto">
      <Heading level={1}>Set up a game</Heading>
      <section className="my-6 max-w-2xl sm:my-12">
        <Heading level={2}>My units</Heading>
        {units.map((unit) => (
          <div
            key={unit.id}
            className="mt-6 flex flex-row items-center gap-x-6 lg:gap-x-8"
          >
            <fieldset className="isolate max-w-sm flex-1 -space-y-px rounded-md shadow-sm sm:flex sm:max-w-none sm:flex-none sm:-space-x-px sm:space-y-0">
              <legend className="sr-only">Unit {unit.id}</legend>
              <Input
                type="text"
                label="Name"
                value={unit.name}
                className="rounded-b-none sm:w-96 sm:flex-none sm:rounded-r-none sm:rounded-bl-md"
                noShadow={true}
              />
              <Select
                label="Gunnery skill"
                className="rounded-t-none sm:flex-none sm:rounded-l-none sm:rounded-tr-md"
                noShadow={true}
              >
                {gunneryOptions.map((option) => (
                  <option
                    key={`${unit.id}-${option.value}`}
                    value={option.value}
                    selected={option.value === unit.gunnery}
                  >
                    {option.name}
                  </option>
                ))}
              </Select>
            </fieldset>
            <button className="-mx-2.5 flex-none px-2.5 py-2.5 font-semibold text-amber-800 hover:text-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 dark:text-amber-600 hover:dark:text-amber-500">
              <span className="text-xl">⊖</span>
              <span className="sr-only"> remove</span>
            </button>
          </div>
        ))}
        <button className="-mx-2.5 my-3.5 px-2.5 py-2.5 font-semibold text-amber-800 hover:text-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 dark:text-amber-600 hover:dark:text-amber-500">
          <span className="text-xl">⊕</span> Add a unit
        </button>
      </section>
      <section className="my-6 max-w-2xl sm:my-12">
        <Heading level={2}>Opposing units</Heading>
        {opponents.map((opponent) => (
          <div
            key={opponent.id}
            className="mt-6 flex flex-row items-center gap-x-6 lg:gap-x-8"
          >
            <div className="max-w-sm flex-1 sm:max-w-none sm:flex-none">
              <legend className="sr-only">Opponent {opponent.id}</legend>
              <Input
                type="text"
                label="Name"
                value={opponent.name}
                className="sm:w-96"
              />
            </div>
            <button className="-mx-2.5 flex-none px-2.5 py-2.5 font-semibold text-amber-800 hover:text-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 dark:text-amber-600 hover:dark:text-amber-500">
              <span className="text-xl">⊖</span>
              <span className="sr-only"> remove</span>
            </button>
          </div>
        ))}
        <button className="-mx-2.5 my-3.5 px-2.5 py-2.5 font-semibold text-amber-800 hover:text-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 dark:text-amber-600 hover:dark:text-amber-500">
          <span className="text-xl">⊕</span> Add an opponent
        </button>
      </section>
      <div className="my-6 flex justify-center sm:my-12">
        <ButtonLink to="/play" className="inline-block">
          Start game
        </ButtonLink>
      </div>
    </div>
  );
}
