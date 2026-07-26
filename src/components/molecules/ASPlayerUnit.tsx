import type { HTMLAttributes } from "react";
import type { ASPlayerInterface } from "~/services/alphaStrikeService";
import { default as Heading, type HeadingLevels } from "../atoms/Heading";

export interface ASPlayerUnitProps extends HTMLAttributes<HTMLDivElement> {
  /** The player unit. */
  unit: ASPlayerInterface;
  /** The heading level. */
  headingLevel: HeadingLevels;
}

/**
 * Displays an Alpha Strike player unit.
 */
export default function ASPlayerUnit({
  unit,
  headingLevel,
  ...props
}: ASPlayerUnitProps) {
  // Summarize the unit's properties.
  const summary = [];
  summary.push(`Skill rating: ${unit.skill}`);
  if (unit.jump) {
    summary.push("Jump-capable");
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
