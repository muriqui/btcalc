import { Form, useActionData } from "react-router-dom";
import UnitSetup from "../../../components/organisms/UnitSetup";
import OpponentSetup from "../../../components/organisms/OpponentSetup";
import Button from "../../../components/atoms/Button";
import Heading from "../../../components/atoms/Heading";
import { ActionErrorData } from "./Setup.action";

/**
 * The setup page.
 */
export default function Setup() {
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
