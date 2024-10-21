import ButtonLink from "../atoms/ButtonLink";
import Eyebrow from "../atoms/Eyebrow";
import { default as Heading, HeadingProps } from "../atoms/Heading";
import Link from "../atoms/Link";
import { LinkProps } from "react-router-dom";
import { HTMLAttributes } from "react";

export interface CallToActionProps extends HTMLAttributes<HTMLDivElement> {
  /** The heading text. */
  heading: string;
  /** The heading level. Defaults to 1. */
  level?: HeadingProps["level"];
  /** Text for the primary action button link. */
  primaryText: string;
  /** The "to" prop for the primary action button link. */
  primaryTo: LinkProps["to"];
  /** Text for an optional secondary action link. */
  secondaryText?: string;
  /** The "to" prop for an optional secondary action link. */
  secondaryTo?: LinkProps["to"];
  /** Optional eyebrow text above the heading. */
  eyebrow?: string | number;
  /** Optional body text between the heading and buttons. */
  body?: string;
  /** Horizontal alignment. Default is 'center'. */
  align?: "left" | "center";
}

/**
 * Attention-grabbing text with an enticing button.
 */
export default function CallToAction({
  heading,
  level = 1,
  primaryText,
  primaryTo,
  secondaryText,
  secondaryTo,
  eyebrow,
  body,
  align = "center",
  className = "",
  children,
  ...props
}: CallToActionProps) {
  const containerAlignClass = align === "center" ? "text-center" : "";
  const buttonAlignClass = align === "center" ? " justify-center" : "";

  return (
    <div className={`${containerAlignClass} ${className}`.trim()} {...props}>
      {eyebrow ? (
        <hgroup>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <Heading level={level} displayLevel={1} className="mt-2">
            {heading}
          </Heading>
        </hgroup>
      ) : (
        <Heading level={level} displayLevel={1}>
          {heading}
        </Heading>
      )}

      {body && (
        <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-400">
          {body}
        </p>
      )}

      {children}

      <div
        className={`mt-10 flex flex-col items-center gap-x-6 gap-y-6 sm:flex-row ${buttonAlignClass}`.trim()}
      >
        <ButtonLink to={primaryTo}>{primaryText}</ButtonLink>
        {secondaryText && secondaryTo && (
          <Link to={secondaryTo}>
            {secondaryText} <span aria-hidden="true">&rarr;</span>
          </Link>
        )}
      </div>
    </div>
  );
}
