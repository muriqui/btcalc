import { HTMLAttributes } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** The heading level, from 1 to 6. */
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * A styled HTML heading.
 */
export default function Heading({
  level,
  className,
  children,
  ...props
}: HeadingProps) {
  className = `mt-4 font-bold tracking-tight text-gray-900 dark:text-gray-200${className ? " " + className : ""}`;

  switch (level) {
    case 1:
      return (
        <h1 className={`text-3xl sm:text-5xl ${className}`} {...props}>
          {children}
        </h1>
      );

    case 2:
      return (
        <h2 className={`text-2xl ${className}`} {...props}>
          {children}
        </h2>
      );

    case 3:
      return (
        <h3 className={`text-xl ${className}`} {...props}>
          {children}
        </h3>
      );

    case 4:
      return (
        <h4 className={`text-lg ${className}`} {...props}>
          {children}
        </h4>
      );

    case 5:
      return (
        <h5 className={`text-base ${className}`} {...props}>
          {children}
        </h5>
      );

    case 6:
      return (
        <h6 className={`text-sm ${className}`} {...props}>
          {children}
        </h6>
      );
  }
}
