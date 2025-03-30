import { Link } from "react-router";

/**
 * The app's main navigation bar.
 */
export default function TopBar() {
  return (
    <header className="bg-amber-400 dark:bg-black">
      <div className="mx-auto w-full max-w-7xl px-6 py-4 text-lg lg:px-8">
        <Link
          to="/"
          className="font-bold tracking-tight text-black dark:text-amber-600"
          aria-label="Home"
        >
          BTcalc
        </Link>
      </div>
    </header>
  );
}
