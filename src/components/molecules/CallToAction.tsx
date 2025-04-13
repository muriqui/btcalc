import type { ButtonLinkProps } from "../atoms/ButtonLink";
import type { EyebrowProps } from "../atoms/Eyebrow";
import type { HeadingProps } from "../atoms/Heading";
import type { LinkProps } from "../atoms/Link";
import ButtonGroup from "./ButtonGroup";
import { cloneElement, type HTMLAttributes, type ReactElement } from "react";

export interface CallToActionProps extends HTMLAttributes<HTMLDivElement> {
  /** The heading component. */
  heading: ReactElement<HeadingProps>;
  /** The primary action button link. */
  primary: ReactElement<ButtonLinkProps>;
  /** The secondary action link. */
  secondary?: ReactElement<LinkProps>;
  /** Optional eyebrow text above the heading. */
  eyebrow?: ReactElement<EyebrowProps>;
  /** Optional paragraph text between the heading and buttons. */
  children?: HTMLAttributes<HTMLParagraphElement>["children"];
  /** Horizontal alignment; default is 'center'. */
  align?: "left" | "center";
}

/**
 * Attention-grabbing text with an enticing button.
 */
export default function CallToAction({
  heading,
  primary,
  secondary,
  eyebrow,
  children,
  align = "center",
  className = "",
  ...props
}: CallToActionProps) {
  const clonedHeading = cloneElement(heading, {
    displayLevel: 1,
    className: eyebrow
      ? `mt-2 ${heading.props.className ?? ""}`.trim()
      : heading.props.className,
    level: heading.props.level || 1,
  });

  const clonedPrimary = cloneElement(primary, {
    variant: "primary",
  });

  const clonedSecondary = secondary
    ? cloneElement(
        secondary,
        {
          variant: "secondary",
        },
        secondary.props.children,
        " ",
        <span aria-hidden="true">&rarr;</span>,
      )
    : undefined;

  return (
    <div
      className={`${align === "center" ? "text-center" : ""} ${className}`.trim()}
      {...props}
    >
      {eyebrow ? (
        <hgroup>
          {eyebrow}
          {clonedHeading}
        </hgroup>
      ) : (
        clonedHeading
      )}

      {children && (
        <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-400">
          {children}
        </p>
      )}

      <ButtonGroup align={align} className="mt-10">
        {clonedPrimary}
        {clonedSecondary}
      </ButtonGroup>
    </div>
  );
}
