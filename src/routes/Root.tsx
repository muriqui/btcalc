import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <Outlet />
    </main>
  );
}
