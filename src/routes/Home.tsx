import type { Route } from "./+types/Home";
import { useState } from "react";
import Button from "~/components/atoms/Button";
import ButtonGroup from "~/components/molecules/ButtonGroup";
import ButtonLink from "~/components/atoms/ButtonLink";
import CallToAction from "~/components/molecules/CallToAction";
import Heading from "~/components/atoms/Heading";
import Link from "~/components/atoms/Link";
import Modal from "~/components/molecules/Modal";
import {
  clearStorage,
  getSystem,
  getStep,
  setSystem,
  setStep,
} from "~/services/utilityService";
import { System, Step } from "~/types";

export async function clientLoader() {
  const system = await getSystem();
  const step = await getStep();
  return { system, step };
}

/**
 * The home page.
 */
export default function Home({
  loaderData,
}: Pick<Route.ComponentProps, "loaderData">) {
  const { system, step } = loaderData;
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
            system && step ? (
              <Link to={`/${system}/${step}`}>Continue your last game</Link>
            ) : undefined
          }
        >
          A BattleTech calculator
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
            to={`/${System.AlphaStrike}/${Step.Setup}`}
            variant="filled"
            onClick={() => {
              clearStorage();
              setSystem(System.AlphaStrike);
              setStep(Step.Setup);
            }}
            tabIndex={0}
          >
            Alpha Strike
          </ButtonLink>
          <ButtonLink
            to={`/${System.TotalWarfare}/${Step.Setup}`}
            variant="filled"
            onClick={() => {
              clearStorage();
              setSystem(System.TotalWarfare);
              setStep(Step.Setup);
            }}
            tabIndex={0}
          >
            Total Warfare
          </ButtonLink>
        </ButtonGroup>
      </Modal>
    </>
  );
}
