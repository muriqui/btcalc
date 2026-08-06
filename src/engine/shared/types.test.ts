import { describe, expect, it } from "vitest";
import type {
  ASUnit,
  AlphaStrikeGame,
  GameState,
  TWUnit,
  TotalWarfareGame,
} from "./types";

// These are compile-time-only checks to guard against future accidental type-shape drift.
describe("GameState discriminated union", () => {
  it("narrows units to TWUnit[] when ruleset is totalWarfare", () => {
    const twUnit: TWUnit = { id: "u1", name: "Atlas AS7-D", skill: 4 };
    const game: GameState = {
      ruleset: "totalWarfare",
      units: [twUnit],
    };

    expect(game.ruleset).toBe("totalWarfare");

    if (game.ruleset === "totalWarfare") {
      // This assignment only type-checks if TypeScript has narrowed
      // `game` to TotalWarfareGame and `game.units` to TWUnit[].
      const narrowed: TotalWarfareGame = game;
      expect(narrowed.units[0].id).toBe("u1");
    }
  });

  it("narrows units to ASUnit[] when ruleset is alphaStrike", () => {
    const asUnit: ASUnit = { id: "u2", name: "Atlas AS7-D", skill: 3 };
    const game: GameState = {
      ruleset: "alphaStrike",
      units: [asUnit],
    };

    expect(game.ruleset).toBe("alphaStrike");

    if (game.ruleset === "alphaStrike") {
      const narrowed: AlphaStrikeGame = game;
      expect(narrowed.units[0].id).toBe("u2");
    }
  });

  it("does not allow a TWUnit inside an AlphaStrikeGame's units array", () => {
    const twUnit: TWUnit = { id: "u1", name: "Atlas AS7-D", skill: 4 };

    // @ts-expect-error - TWUnit is not assignable into AlphaStrikeGame.units
    const invalid: AlphaStrikeGame = {
      ruleset: "alphaStrike",
      units: [twUnit],
    };

    // Referenced only so `invalid` isn't flagged unused; the real
    // assertion is the @ts-expect-error line above.
    expect(invalid.ruleset).toBe("alphaStrike");
  });
});
