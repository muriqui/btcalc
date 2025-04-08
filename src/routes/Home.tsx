import { useLoaderData } from "react-router";
import CallToAction from "../components/molecules/CallToAction";
import Heading from "../components/atoms/Heading";
import ButtonLink from "../components/atoms/ButtonLink";
import Link from "../components/atoms/Link";
import { clearStorage, getStep } from "../services/utilityService";
import type { Route } from "./+types/Home";

export async function clientLoader() {
  const step = await getStep();
  return { step };
}

/**
 * The home page.
 */
export default function Home() {
  const { step }: Route.ComponentProps["loaderData"] = useLoaderData();

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <CallToAction
        heading={<Heading level={1}>BTcalc</Heading>}
        primary={
          <ButtonLink to="/play" onClick={clearStorage}>
            Set up a new game
          </ButtonLink>
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
  );
}
