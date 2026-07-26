import type { Route } from "./+types/Setup";
import { useState } from "react";
import { Form, Outlet, useNavigate } from "react-router";
import ASOpponentUnit from "~/components/molecules/ASOpponentUnit";
import ASPlayerUnit from "~/components/molecules/ASPlayerUnit";
import Button from "~/components/atoms/Button";
import Heading from "~/components/atoms/Heading";
import Modal from "~/components/molecules/Modal";
import {
  getASOpponentUnits,
  getASPlayerUnits,
} from "~/services/alphaStrikeService";
import { System, Step } from "~/types";
import { setStep } from "~/services/utilityService";

export interface SetupOutletContext {
  onClose: () => void;
}

export async function clientLoader() {
  const playerUnits = await getASPlayerUnits();
  const opponentUnits = await getASOpponentUnits();
  return { playerUnits, opponentUnits };
}

/**
 * The Alpha Strike game setup page.
 */
export default function Setup({
  loaderData,
}: Pick<Route.ComponentProps, "loaderData">) {
  const { playerUnits, opponentUnits } = loaderData;
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  // Whenever we open the modal below, we're navigating to a child route, so closing the
  // modal requires both updating the state and navigating back here.
  const handleModalClose = () => {
    setModalOpen(false);
    void navigate(`/${System.AlphaStrike}/${Step.Setup}`);
  };

  // Pass the modal close handler to the child routes so they can trigger it after saving.
  const outletContext = {
    onClose: handleModalClose,
  } satisfies SetupOutletContext;

  return (
    <>
      <Heading level={1} className="mt-8 mb-4">
        Set up a game
      </Heading>

      <div className="grid grid-cols-1 gap-x-8 pt-6 pb-12 lg:grid-cols-2">
        <section>
          <Heading level={2} className="mb-4">
            My units
          </Heading>
          <div className="flex flex-col gap-y-4">
            {playerUnits.map((unit) => (
              <Form
                key={unit.id}
                action={`player/${unit.id}/delete`}
                method="post"
                className="flex gap-x-2"
              >
                <ASPlayerUnit headingLevel={3} unit={unit} className="flex-1" />
                <Button
                  className="flex-none"
                  aria-label={`Edit player's ${unit.name}`}
                  onClick={() => {
                    setModalOpen(true);
                    void navigate(`player/${unit.id}/edit`);
                  }}
                >
                  edit
                </Button>
                <Button
                  type="submit"
                  className="flex-none"
                  aria-label={`Delete player's ${unit.name}`}
                >
                  delete
                </Button>
              </Form>
            ))}
            <Button
              variant="subtle"
              onClick={() => {
                setModalOpen(true);
                void navigate("player/add");
              }}
            >
              <span className="text-xl" aria-hidden="true">
                ⊕
              </span>{" "}
              Add a unit
            </Button>
          </div>
        </section>

        <section>
          <Heading level={2} className="mb-4">
            Opposing units
          </Heading>
          <div className="flex flex-col gap-y-4">
            {opponentUnits.map((unit) => (
              <Form
                key={unit.id}
                action={`opponent/${unit.id}/delete`}
                method="post"
                className="flex gap-x-2"
              >
                <ASOpponentUnit
                  headingLevel={3}
                  unit={unit}
                  className="flex-1"
                />
                <Button
                  className="flex-none"
                  aria-label={`Edit opponent's ${unit.name}`}
                  onClick={() => {
                    setModalOpen(true);
                    void navigate(`opponent/${unit.id}/edit`);
                  }}
                >
                  edit
                </Button>
                <Button
                  type="submit"
                  className="flex-none"
                  aria-label={`Delete opponent's ${unit.name}`}
                >
                  delete
                </Button>
              </Form>
            ))}
            <Button
              variant="subtle"
              onClick={() => {
                setModalOpen(true);
                void navigate("opponent/add");
              }}
            >
              <span className="text-xl" aria-hidden="true">
                ⊕
              </span>{" "}
              Add an opponent
            </Button>
          </div>
        </section>
      </div>

      <div className="flex justify-center">
        <Button
          variant="primary"
          onClick={() => {
            setStep(Step.Movement);
            void navigate(`/${System.AlphaStrike}/${Step.Movement}`);
          }}
          disabled={playerUnits.length === 0 || opponentUnits.length === 0}
        >
          Start the game
        </Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <Outlet context={outletContext} />
      </Modal>
    </>
  );
}
