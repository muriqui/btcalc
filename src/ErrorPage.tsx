import { isRouteErrorResponse, useRouteError } from "react-router";
import RouteError from "./components/molecules/RouteError";

export default function ErrorPage() {
  const error = useRouteError();
  const status = isRouteErrorResponse(error) ? error.status : undefined;
  const statusText = isRouteErrorResponse(error)
    ? error.statusText
    : error instanceof Error
      ? error.message
      : typeof error === "string"
        ? error
        : "Unknown Error";

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <RouteError status={status} statusText={statusText}></RouteError>
    </main>
  );
}
