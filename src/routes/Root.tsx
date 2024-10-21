import { Outlet, useLocation, Link } from "react-router-dom";

export default function Root() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && (
        <header className="bg-amber-400 px-6 py-4 lg:px-8 dark:bg-black">
          <div className="mx-auto max-w-7xl">
            <Link
              to="/"
              className="font-bold tracking-tight text-black dark:text-amber-600"
              aria-label="Home"
            >
              BTcalc
            </Link>
          </div>
        </header>
      )}
      <main className="mx-auto h-full max-w-7xl px-6 lg:px-8">
        <Outlet />
      </main>
    </>
  );
}
