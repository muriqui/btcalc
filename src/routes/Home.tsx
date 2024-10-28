import CallToAction from "../components/molecules/CallToAction";
import { localStoragePrefix } from "../hooks/useLocalStorage";

/**
 * The home page.
 */
export default function Home() {
  // Clears all local storage belonging to the app (as opposed to localStorage.clear(), which clears everything for the domain).
  const clearLocalStorage = () => {
    // Find all keys that start with the app prefix.
    const keysToDelete = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(localStoragePrefix)) {
        // Deleting the item here would shorten the list while it's being iterated and cause some keys to be missed.
        // Instead, save the keys we find and delete them below.
        keysToDelete.push(key);
      }
    }
    // Clear any keys we found.
    keysToDelete.forEach((key) => localStorage.removeItem(key));
  };

  // Properties for a secondary action link only shown when there is a game in local storage.
  const secondaryProps = localStorage.length
    ? {
        secondaryText: "Continue your last game",
        secondaryTo: "/play",
      }
    : {};

  return (
    <div className="grid min-h-full place-items-center py-24 sm:py-32">
      <CallToAction
        heading="BTcalc"
        primaryText="Set up a new game"
        primaryTo="/setup"
        primaryOnClick={clearLocalStorage}
        body="A BattleTech shot calculator"
        {...secondaryProps}
      />
    </div>
  );
}
