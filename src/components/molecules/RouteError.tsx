import CallToAction from "./CallToAction";

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
  return (
    <CallToAction
      heading={statusText}
      primaryText="Go back home"
      primaryTo="/"
      secondaryText="Report a bug"
      secondaryTo="https://github.com/muriqui/btcalc/issues"
      eyebrow={status}
      body={
        status === 404
          ? "Sorry, we couldn’t find the page you’re looking for."
          : "Sorry, an unexpected error has occurred."
      }
    />
  );
}
