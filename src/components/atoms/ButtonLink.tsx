import { Link, LinkProps } from "react-router-dom";

/**
 * A React Router Link styled to look like a button.
 */
export default function ButtonLink({
  to,
  className = "",
  children,
  ...props
}: LinkProps) {
  return (
    <Link
      to={to}
      className={`rounded-md bg-amber-800 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 ${className}`.trim()}
      {...props}
    >
      {children}
    </Link>
  );
}
