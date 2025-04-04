import { Outlet } from "react-router";
import ErrorPage from "../ErrorPage";

export function ErrorBoundary() {
  return <ErrorPage />;
}

/**
 * The wrapper for the "/" path.
 */
export default function Root() {
  return (
    <main className="mx-auto w-full max-w-7xl grow px-6 lg:px-8">
      <Outlet />
    </main>
  );
}
