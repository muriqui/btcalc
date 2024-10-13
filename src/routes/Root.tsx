import ButtonLink from "../components/ButtonLink";
import Link from "../components/Link";

export default function Root() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <header>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-200">
            BTcalc
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
            A BattleTech shot calculator
          </p>
        </header>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <ButtonLink to="/setup" className="text-sm">
            Start a new game
          </ButtonLink>
          <Link to="/play" className="text-sm">
            Continue your last game <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
