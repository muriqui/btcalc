import { Outlet } from "react-router";
import TopBar from "../../components/organisms/TopBar";
import ErrorPage from "../../ErrorPage";

export function ErrorBoundary() {
  return <ErrorPage />;
}

/**
 * The wrapper for "play" path.
 */
export default function Play() {
  return (
    <>
      <TopBar />
      <main className="mx-auto w-full max-w-7xl grow px-6 lg:px-8">
        <Outlet />
      </main>
    </>
  );
}
