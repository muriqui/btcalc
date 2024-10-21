import { Link as RouterLink, LinkProps } from "react-router-dom";

/**
 * A styled React Router Link.
 */
export default function Link({
  to,
  className = "",
  children,
  ...props
}: LinkProps) {
  return (
    <RouterLink
      to={to}
      className={`font-semibold text-gray-900 hover:underline dark:text-gray-200 ${className}`.trim()}
      {...props}
    >
      {children}
    </RouterLink>
  );
}
