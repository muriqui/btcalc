import { Outlet, useLocation } from "react-router-dom";
import TopBar from "../components/organisms/TopBar";

export default function Root() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <TopBar />}
      <main className="mx-auto h-full max-w-7xl px-6 lg:px-8">
        <Outlet />
      </main>
    </>
  );
}
