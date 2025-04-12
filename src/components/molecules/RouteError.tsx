import CallToAction from "./CallToAction";
import Heading from "../atoms/Heading";
import ButtonLink from "../atoms/ButtonLink";
import Link from "../atoms/Link";

export interface RouteErrorProps {
  /** The status code; e.g., 404. */
  status?: number;
  /** The status code text or application error message. */
  statusText?: string;
  /** A stack trace. */
  stack?: string;
}

/**
 * Error message displayed for a route error.
 */
export default function RouteError({
  status,
  statusText,
  stack,
}: RouteErrorProps) {
  let heading, text;
  if (status) {
    heading = status;
    text =
      status === 404
        ? "Sorry, we couldn’t find the page you’re looking for."
        : statusText;
  } else {
    heading = "Oops!";
    text = (
      <>
        {"Sorry, an unexpected error occurred."}
        {statusText && (
          <pre className="mt-4 text-black dark:text-white">{statusText}</pre>
        )}
        {stack && (
          <pre className="mt-4 border p-4 text-left text-sm dark:bg-black dark:text-white">
            {stack}
          </pre>
        )}
      </>
    );
  }

  return (
    <CallToAction
      heading={<Heading level={1}>{heading}</Heading>}
      primary={<ButtonLink to="/">Go back home</ButtonLink>}
      secondary={
        <Link to="https://github.com/muriqui/btcalc/issues">Report a bug</Link>
      }
    >
      {text}
    </CallToAction>
  );
}
