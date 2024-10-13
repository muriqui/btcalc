import ButtonLink from "../atoms/ButtonLink";
import Heading from "../atoms/Heading";
import Link from "../atoms/Link";

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
  const message =
    status === 404
      ? "Sorry, we couldn’t find the page you’re looking for."
      : "Sorry, an unexpected error has occurred.";

  return (
    <div className="text-center">
      {status ? (
        <p className="text-base font-semibold text-amber-700 dark:text-amber-600">
          {status}
        </p>
      ) : (
        ""
      )}
      <Heading level={1}>{statusText}</Heading>
      <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
        {message}
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <ButtonLink to="/" className="text-sm">
          Go back home
        </ButtonLink>
        <Link to="https://github.com/muriqui/btcalc/issues" className="text-sm">
          Report a bug <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
