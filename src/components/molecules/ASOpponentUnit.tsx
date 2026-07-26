import type { HTMLAttributes } from "react";
import type { ASOpponentInterface } from "~/services/alphaStrikeService";
import { default as Heading, type HeadingLevels } from "../atoms/Heading";

export interface ASOpponentUnitProps extends HTMLAttributes<HTMLDivElement> {
  /** The opponent unit. */
  unit: ASOpponentInterface;
  /** The heading level. */
  headingLevel: HeadingLevels;
}

/**
 * Displays an Alpha Strike opponent unit.
 */
export default function ASOpponentUnit({
  unit,
  headingLevel,
  ...props
}: ASOpponentUnitProps) {
  // Summarize the unit's properties.
  const summary = [];
  summary.push(
    `TMM: ${unit.tmm}${unit.jump && unit.jumpTmm ? " / " + unit.jumpTmm + "j" : ""}`,
  );
  if (unit.jump) {
    summary.push("Jump-capable");
  }
  if (unit.stl) {
    summary.push("Stealth");
  }

  return (
    <div {...props}>
      <Heading level={headingLevel} displayLevel={3}>
        {unit.name}
      </Heading>
      <p className="text-sm">{summary.join(", ")}</p>
    </div>
  );
}
