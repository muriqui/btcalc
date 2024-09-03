import ButtonLink from "./ButtonLink";
import Link from "./Link";

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
        <p className="text-base font-semibold text-amber-600">{status}</p>
      ) : (
        ""
      )}
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {statusText}
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">{message}</p>
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
