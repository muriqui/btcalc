import { useLoaderData } from "react-router-dom";
import CallToAction from "../../components/molecules/CallToAction";
import Heading from "../../components/atoms/Heading";
import ButtonLink from "../../components/atoms/ButtonLink";
import Link from "../../components/atoms/Link";
import homeLoader from "./Home.loader";
import { clearStorage } from "../../services/utilityService";

/**
 * The home page.
 */
export default function Home() {
  const { step } = useLoaderData() as Awaited<ReturnType<typeof homeLoader>>;

  return (
    <div className="grid min-h-full place-items-center py-24 sm:py-32">
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
    </div>
  );
}
