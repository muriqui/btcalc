import { Link, LinkProps } from "react-router-dom";

export interface ButtonLinkProps extends LinkProps {
  /** Is the button disabled? */
  isDisabled?: boolean;
}

/**
 * A React Router Link styled to look like a button.
 */
export default function ButtonLink({
  to,
  className = "",
  children,
  isDisabled = false,
  ...props
}: ButtonLinkProps) {
  return isDisabled ? (
    <div
      className={`cursor-not-allowed select-none rounded-md bg-gray-200 px-3.5 py-2.5 font-semibold text-gray-600 shadow-sm dark:bg-gray-800 dark:text-gray-400 ${className}`.trim()}
    >
      {children}
    </div>
  ) : (
    <Link
      to={to}
      className={`rounded-md bg-amber-800 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 ${className}`.trim()}
      {...props}
    >
      {children}
    </Link>
  );
}
