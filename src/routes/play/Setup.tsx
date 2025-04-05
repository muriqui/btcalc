import {
  Form,
  useActionData,
  type ActionFunctionArgs,
  redirect,
} from "react-router";
import qs from "qs";
import { type UnitInterface, type OpponentInterface, Step } from "../../types";
import { setUnits, setOpponents, setStep } from "../../services/utilityService";
import UnitSetup from "../../components/organisms/UnitSetup";
import OpponentSetup from "../../components/organisms/OpponentSetup";
import Button from "../../components/atoms/Button";
import Heading from "../../components/atoms/Heading";

interface QueryUnits {
  id?: string;
  name?: string;
  gunnery?: string;
}

interface QueryOpponents {
  id?: string;
  name?: string;
}

interface QueryParams {
  units?: QueryUnits[];
  opponents?: QueryOpponents[];
}

export interface ActionErrorData {
  unnamed?: string;
}

export async function clientAction({ request }: ActionFunctionArgs) {
  const text = await request.text();
  const { units, opponents } = qs.parse(text) as QueryParams;

  // Validate the player's units.
  const validatedUnits: UnitInterface[] = [];
  if (Array.isArray(units)) {
    units.forEach((unit) => {
      const id = unit?.id;
      const name = unit?.name;
      const gunnery =
        typeof unit?.gunnery === "string" ? parseInt(unit.gunnery) : NaN;

      if (
        typeof id === "string" &&
        id.length > 0 &&
        typeof name === "string" &&
        name.length > 0 &&
        !isNaN(gunnery)
      ) {
        validatedUnits.push({ id, name, gunnery });
      }
    });
  }

  // Validate the opponent's units.
  const validatedOpponents: OpponentInterface[] = [];
  if (Array.isArray(opponents)) {
    opponents.forEach((opponent) => {
      const id = opponent?.id;
      const name = opponent?.name;

      if (
        typeof id === "string" &&
        id.length > 0 &&
        typeof name === "string" &&
        name.length > 0
      ) {
        validatedOpponents.push({ id, name });
      }
    });
  }

  // If either side lacks a valid unit, return error data to the form.
  if (!validatedUnits.length || !validatedOpponents.length) {
    const errors: ActionErrorData = {
      unnamed: "Each team must have at least one named unit.",
    };
    return errors;
  }

  // Save the validated data and go to Movement page to start the game.
  setUnits(validatedUnits);
  setOpponents(validatedOpponents);
  setStep(Step.Movement);
  return redirect(`/play/${Step.Movement}`);
}

/**
 * The setup page.
 */
export default function Setup() {
  // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
  const errors = useActionData() as ActionErrorData;

  return (
    <Form
      method="post"
      className="grid grid-cols-1 gap-x-4 gap-y-4 pb-12 pt-6 sm:gap-y-6 lg:grid-cols-12"
    >
      <Heading level={1} className="mb-4 mt-2 lg:col-span-12">
        Set up a game
      </Heading>

      <section className="-mr-4 lg:col-span-7 lg:mr-0">
        <Heading level={2}>My units</Heading>
        <UnitSetup />
      </section>

      <section className="-mr-4 lg:col-span-4 lg:col-end-13">
        <Heading level={2}>Opposing units</Heading>
        <OpponentSetup />
      </section>

      <div className="flex justify-center lg:col-span-12">
        <Button
          type="submit"
          variant="primary"
          className="mt-2 w-full max-w-96 text-center"
        >
          Start game
        </Button>
      </div>
      <div
        role="alert"
        aria-atomic="true"
        className="flex justify-center lg:col-span-12"
      >
        {errors?.unnamed && <p>{errors.unnamed}</p>}
      </div>
    </Form>
  );
}
