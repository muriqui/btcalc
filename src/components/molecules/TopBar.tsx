import { Link } from "react-router";
import { System } from "~/types";

export interface TopBarProps {
  system: System;
}

/**
 * The app's main navigation bar.
 */
export default function TopBar({ system }: TopBarProps) {
  return (
    <header className="bg-amber-400 dark:bg-black">
      <div className="mx-auto flex w-full max-w-7xl justify-between px-6 py-4 text-lg lg:px-8">
        <Link
          to="/"
          className="font-bold tracking-tight text-black dark:text-amber-600"
          aria-label="Home"
        >
          BTcalc
        </Link>
        <p className="italic">
          <span className="sr-only sm:not-sr-only">BattleTech: </span>
          {system === System.AlphaStrike ? "Alpha Strike" : "Total Warfare"}
        </p>
      </div>
    </header>
  );
}
