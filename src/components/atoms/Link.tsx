import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

export interface LinkProps extends RouterLinkProps {
  /** How the link is displayed: "text" for use in body text, or "secondary" for use a secondary call-to-action. */
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
        "text-lg text-gray-900 hover:text-black dark:text-gray-200 hover:dark:text-white";
      break;

    case "text":
    default:
      linkClasses =
        "text-amber-800 hover:text-amber-700 dark:text-amber-600 hover:dark:text-amber-500";
  }

  return (
    <RouterLink
      className={`font-semibold hover:underline ${linkClasses} ${className}`.trim()}
      {...props}
    >
      {children}
    </RouterLink>
  );
}
