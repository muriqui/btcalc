import type { Route } from "./+types/GameplayLayout";
import { Outlet, redirect } from "react-router";
import TopBar from "~/components/organisms/TopBar";
import { getSystem } from "~/services/utilityService";

export async function clientLoader() {
  const system = await getSystem();
  // Prevent deep-linking to gameplay routes with no game system selected.
  if (!system) {
    return redirect("/");
  }
  return { system };
}

/**
 * The layout for gameplay routes.
 */
export default function GameplayLayout({
  loaderData,
}: Pick<Route.ComponentProps, "loaderData">) {
  const { system } = loaderData;

  return (
    <>
      <TopBar system={system} />
      <main className="mx-auto w-full max-w-7xl grow px-6 lg:px-8">
        <Outlet />
      </main>
    </>
  );
}
