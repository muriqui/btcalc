import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from "react-router";

export interface LinkProps extends RouterLinkProps {
  /** How the link is displayed: "text" for use in body text, or "secondary" for use as a secondary call-to-action. */
  variant?: "text" | "secondary";
}

/**
 * A styled React Router Link.
 */
export default function Link({
  variant = "text",
  className = "",
  children,
  ...props
}: LinkProps) {
  let linkClasses = "";
  switch (variant) {
    case "secondary":
      linkClasses =
        "text-lg text-gray-900 hover:text-black dark:text-gray-200 dark:hover:text-white";
      break;

    case "text":
    default:
      linkClasses =
        "text-amber-800 hover:text-amber-700 dark:text-amber-600 dark:hover:text-amber-500";
  }

  return (
    <RouterLink
      className={`font-semibold hover:underline hover:underline-offset-2 ${linkClasses} ${className}`.trim()}
      {...props}
    >
      {children}
    </RouterLink>
  );
}
