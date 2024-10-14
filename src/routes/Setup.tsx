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
    <>
      <Heading level={1}>Set up a new game</Heading>
      <section>
        <Heading level={2}>My units</Heading>
        {units.map((unit) => (
          <fieldset
            key={unit.id}
            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7"
          >
            <div className="sm:col-span-1">
              <legend className="block font-medium text-gray-900 dark:text-gray-200">{`Unit #${unit.id}`}</legend>
            </div>
            <Input
              type="text"
              label="Name"
              value={unit.name}
              className="sm:col-span-4"
            />
            <Select label="Gunnery skill" className="sm:col-span-2">
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
        ))}
      </section>
      <section>
        <Heading level={2}>Opposing units</Heading>
        {opponents.map((opponent) => (
          <div
            key={opponent.id}
            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-5"
          >
            <div className="sm:col-span-1">
              <legend className="block font-medium text-gray-900 dark:text-gray-200">{`Opponent #${opponent.id}`}</legend>
            </div>
            <Input
              type="text"
              label="Name"
              value={opponent.name}
              className="sm:col-span-4"
            />
          </div>
        ))}
      </section>
      <ButtonLink to="/play">Start game</ButtonLink>
    </>
  );
}
