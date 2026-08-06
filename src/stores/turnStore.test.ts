import { beforeEach, describe, expect, it, vi } from "vitest";
import { createTurnStore } from "./turnStore";

beforeEach(() => {
  localStorage.clear();
});

describe("turnStore", () => {
  it("exposes a resetTurn action that can be called without error", () => {
    const store = createTurnStore();

    expect(() => store.getState().resetTurn()).not.toThrow();
  });

  it("never calls localStorage.setItem as a result of any action", () => {
    const setItemSpy = vi.spyOn(localStorage, "setItem");
    const store = createTurnStore();

    store.getState().resetTurn();

    expect(setItemSpy).not.toHaveBeenCalled();
  });
});
