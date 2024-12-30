import CallToAction from "./CallToAction";
import Heading from "../atoms/Heading";
import ButtonLink from "../atoms/ButtonLink";
import Link from "../atoms/Link";
import Eyebrow from "../atoms/Eyebrow";

export interface RouteErrorProps {
  /** The status code; e.g., 404. */
  status?: number;
  /** The status code text. */
  statusText: string;
}

/**
 * Error message displayed for a route error.
 */
export default function RouteError({ status, statusText }: RouteErrorProps) {
  const heading = status === 404 ? statusText : "Error";
  const text =
    status === 404
      ? "Sorry, we couldn’t find the page you’re looking for."
      : statusText;

  return (
    <CallToAction
      heading={<Heading level={1}>{heading}</Heading>}
      primary={<ButtonLink to="/">Go back home</ButtonLink>}
      secondary={
        <Link to="https://github.com/muriqui/btcalc/issues">Report a bug</Link>
      }
      eyebrow={<Eyebrow>{status}</Eyebrow>}
    >
      {text}
    </CallToAction>
  );
}
