import { create } from "zustand";

/**
 * Per-turn condition state (movement, terrain, range, and similar inputs
 * collected during the turn wizard). Deliberately NOT wrapped in Zustand's
 * `persist` middleware and never reads or writes `localStorage` — this
 * store's whole purpose is to hold state that's reset at the end of every
 * turn, not carried across sessions.
 *
 * This change doesn't yet know the shape of ruleset-specific turn
 * conditions (TWShotConditions / ASShotConditions come from later engine
 * changes), so the store currently holds no fields beyond the reset
 * mechanism itself. Future changes add fields here alongside the
 * corresponding entries in the reset object below, without restructuring
 * the store.
 */
export interface TurnStore {
  resetTurn: () => void;
}

const initialState = {};

export function createTurnStore() {
  return create<TurnStore>()((set) => ({
    ...initialState,
    resetTurn: () => set({ ...initialState }),
  }));
}

export const useTurnStore = createTurnStore();
