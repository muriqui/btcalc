import { HTMLAttributes } from "react";

export type EyebrowProps = HTMLAttributes<HTMLParagraphElement>;

/**
 * A line of descriptive text above a heading.
 */
export default function Eyebrow({
  className = "",
  children,
  ...props
}: EyebrowProps) {
  return (
    <p
      className={`text-base font-semibold leading-7 text-gray-600 dark:text-gray-400 ${className}`.trim()}
      {...props}
    >
      {children}
    </p>
  );
}
