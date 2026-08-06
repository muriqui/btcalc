import { beforeEach, describe, expect, it } from "vitest";
import { createGameStore } from "./gameStore";

beforeEach(() => {
  // Defined in vitest.setup.ts.
  localStorage.clear();
});

describe("gameStore", () => {
  it("starts a Total Warfare game with an empty units array", () => {
    const store = createGameStore();

    store.getState().startGame("totalWarfare");

    expect(store.getState().game).toEqual({
      ruleset: "totalWarfare",
      units: [],
    });
  });

  it("starts an Alpha Strike game with an empty units array", () => {
    const store = createGameStore();

    store.getState().startGame("alphaStrike");

    expect(store.getState().game).toEqual({
      ruleset: "alphaStrike",
      units: [],
    });
  });

  it("rehydrates a fresh store instance from a previously persisted game", async () => {
    const original = createGameStore();
    original.getState().startGame("totalWarfare");

    // Simulate closing and reopening the browser: a brand new store
    // instance, backed by the same localStorage key, rehydrated from
    // whatever was persisted by the previous instance.
    const reloaded = createGameStore();
    await reloaded.persist.rehydrate();

    expect(reloaded.getState().game).toEqual(original.getState().game);
  });

  it("removes the persisted entry and resets game to null when cleared", async () => {
    const store = createGameStore();
    store.getState().startGame("totalWarfare");

    // Ensure the write has landed in localStorage before asserting on it.
    await store.persist.rehydrate();
    expect(localStorage.getItem("btcalc-game")).not.toBeNull();

    store.getState().clearGame();

    expect(store.getState().game).toBeNull();
    expect(localStorage.getItem("btcalc-game")).toBeNull();
  });
});
