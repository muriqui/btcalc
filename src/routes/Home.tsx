import { useState } from "react";
import CallToAction from "../components/molecules/CallToAction";
import Heading from "../components/atoms/Heading";
import Button from "~/components/atoms/Button";
import ButtonGroup from "~/components/molecules/ButtonGroup";
import ButtonLink from "../components/atoms/ButtonLink";
import Link from "../components/atoms/Link";
import Modal from "~/components/molecules/Modal";
import { clearStorage, getStep } from "../services/utilityService";
import type { Route } from "./+types/Home";

export async function clientLoader() {
  const step = await getStep();
  return { step };
}

/**
 * The home page.
 */
export default function Home({
  loaderData,
}: Pick<Route.ComponentProps, "loaderData">) {
  const { step } = loaderData;
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <CallToAction
          heading={<Heading level={1}>BTcalc</Heading>}
          primary={
            <Button onClick={() => setModalOpen(true)}>
              Set up a new game
            </Button>
          }
          secondary={
            step ? (
              <Link to={`/play/${step}`}>Continue your last game</Link>
            ) : undefined
          }
        >
          A BattleTech shot calculator
        </CallToAction>
      </main>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        className="text-center"
      >
        <Heading level={2}>Choose which game system to use:</Heading>
        <ButtonGroup className="mt-4">
          <ButtonLink
            to="/alpha-strike"
            variant="filled"
            onClick={clearStorage}
            tabIndex={0}
          >
            Alpha Strike
          </ButtonLink>
          <ButtonLink
            to="/play"
            variant="filled"
            onClick={clearStorage}
            tabIndex={0}
          >
            Total Warfare
          </ButtonLink>
        </ButtonGroup>
      </Modal>
    </>
  );
}
