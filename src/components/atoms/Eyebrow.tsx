import { HTMLAttributes } from "react";

export type EyebrowProps = HTMLAttributes<HTMLParagraphElement>;

/**
 * A line of descriptive text above a heading.
 */
export default function Eyebrow({
  className,
  children,
  ...props
}: EyebrowProps) {
  return (
    <p
      className={`text-base font-semibold leading-7 text-amber-700 dark:text-amber-600${className ? " " + className : ""}`}
      {...props}
    >
      {children}
    </p>
  );
}
