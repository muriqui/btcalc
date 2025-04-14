import { Outlet } from "react-router";
import TopBar from "../../components/organisms/TopBar";
import { System } from "~/types";

/**
 * The wrapper for Alpha Strike gameplay routes.
 */
export default function AlphaStrike() {
  return (
    <>
      <TopBar system={System.AlphaStrike} />
      <main className="mx-auto w-full max-w-7xl grow px-6 lg:px-8">
        <Outlet />
      </main>
    </>
  );
}
