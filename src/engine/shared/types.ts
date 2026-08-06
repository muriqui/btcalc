// Shared types used across both rulesets. Ruleset-specific types
// live under src/engine/totalWarfare/ and src/engine/alphaStrike/.

export type Ruleset = "totalWarfare" | "alphaStrike";

export interface NamedModifier {
  label: string;
  value: number;
}

export interface ToHitResult {
  baseTarget: number;
  modifiers: NamedModifier[];
  total: number;
  isImpossible: boolean;
}

// Minimal unit shape.
// `skill` is Gunnery in Total Warfare and Skill in Alpha Strike.
interface UnitBase {
  id: string;
  name: string;
  skill: number;
}

// @todo: Add Total Warfare specifics.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface TWUnit extends UnitBase {}

// @todo: Add Alpha Strike specifics.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ASUnit extends UnitBase {}

export interface TotalWarfareGame {
  ruleset: "totalWarfare";
  units: TWUnit[];
}

export interface AlphaStrikeGame {
  ruleset: "alphaStrike";
  units: ASUnit[];
}

export type GameState = TotalWarfareGame | AlphaStrikeGame;
