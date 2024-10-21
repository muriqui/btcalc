import { HTMLAttributes } from "react";

type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** The hierarchical heading level, from 1 to 6. */
  level: HeadingLevels;
  /** Optionally, display the heading as though it were at a different level than its hierarchical level. */
  displayLevel?: HeadingLevels;
}

/**
 * A styled HTML heading.
 */
export default function Heading({
  level,
  displayLevel,
  className = "",
  children,
  ...props
}: HeadingProps) {
  let levelClasses;
  switch (displayLevel ?? level) {
    case 1:
      levelClasses = "text-4xl sm:text-6xl";
      break;

    case 2:
      levelClasses = "text-2xl";
      break;

    case 3:
      levelClasses = "text-xl";
      break;

    case 4:
      levelClasses = "text-lg";
      break;

    case 5:
      levelClasses = "text-base";
      break;

    case 6:
      levelClasses = "text-sm";
      break;
  }
  className =
    `${levelClasses} font-bold tracking-tight text-balance text-gray-900 dark:text-gray-200 ${className}`.trim();

  switch (level) {
    case 1:
      return (
        <h1 className={className} {...props}>
          {children}
        </h1>
      );

    case 2:
      return (
        <h2 className={className} {...props}>
          {children}
        </h2>
      );

    case 3:
      return (
        <h3 className={className} {...props}>
          {children}
        </h3>
      );

    case 4:
      return (
        <h4 className={className} {...props}>
          {children}
        </h4>
      );

    case 5:
      return (
        <h5 className={className} {...props}>
          {children}
        </h5>
      );

    case 6:
      return (
        <h6 className={className} {...props}>
          {children}
        </h6>
      );
  }
}
