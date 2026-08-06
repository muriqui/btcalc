import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { GameState, Ruleset } from "../engine/shared/types";

const STORAGE_KEY = "btcalc-game";

export interface GameStore {
  game: GameState | null;
  startGame: (ruleset: Ruleset) => void;
  clearGame: () => void;
}

function emptyGameFor(ruleset: Ruleset): GameState {
  return ruleset === "totalWarfare"
    ? { ruleset: "totalWarfare", units: [] }
    : { ruleset: "alphaStrike", units: [] };
}

/**
 * Creates a new, independent game store instance backed by `persist`.
 *
 * The app uses the single `useGameStore` instance exported below. This
 * factory exists primarily so tests can create fresh, isolated store
 * instances that still share the same `localStorage` key — which is what
 * lets a test simulate "closing and reopening the browser" by creating a
 * second instance and rehydrating it from the same persisted entry.
 */
export function createGameStore() {
  return create<GameStore>()(
    persist(
      (set) => ({
        game: null,
        startGame: (ruleset) => set({ game: emptyGameFor(ruleset) }),
        clearGame: () => {
          set({ game: null });
          // Explicitly remove the entry rather than relying on the persist
          // middleware's own storage internals: writing `{ game: null }`
          // through the normal persist flow would leave a (now-empty)
          // envelope behind instead of removing the key entirely, which
          // is the guarantee this action is meant to provide.
          localStorage.removeItem(STORAGE_KEY);
        },
      }),
      {
        name: STORAGE_KEY,
        version: 1,
        storage: createJSONStorage(() => localStorage),
      },
    ),
  );
}

export const useGameStore = createGameStore();
