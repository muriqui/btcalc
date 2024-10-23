import { Link } from "react-router-dom";

export default function TopBar() {
  return (
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
  );
}
