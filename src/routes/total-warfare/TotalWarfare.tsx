import { Outlet } from "react-router";
import TopBar from "../../components/organisms/TopBar";
import { System } from "~/types";

/**
 * The wrapper for Total Warfare gameplay routes.
 */
export default function TotalWarfare() {
  return (
    <>
      <TopBar system={System.TotalWarfare} />
      <main className="mx-auto w-full max-w-7xl grow px-6 lg:px-8">
        <Outlet />
      </main>
    </>
  );
}
