import { Link, type LinkProps } from "react-router";

export interface ButtonLinkProps extends LinkProps {
  /** How the button is displayed. */
  variant?: "text" | "filled" | "outlined" | "primary";
}

/**
 * A React Router Link styled to look like a button.
 */
export default function ButtonLink({
  variant = "text",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  let buttonClasses = "";
  switch (variant) {
    case "primary":
    case "filled":
      buttonClasses =
        "bg-amber-800 border-amber-800 text-white shadow-xs hover:bg-amber-700 hover:border-amber-700";
      break;

    case "outlined":
      buttonClasses =
        "border-amber-800 text-amber-800 shadow-xs hover:bg-gray-50 hover:border-amber-700 hover:text-amber-700 dark:border-amber-600 dark:text-amber-600 dark:hover:bg-gray-800 dark:hover:border-amber-500 dark:hover:text-amber-500";
      break;

    case "text":
    default:
      buttonClasses =
        "border-transparent text-amber-800 hover:bg-gray-50 hover:border-gray-50 hover:text-amber-700 dark:text-amber-600 dark:hover:bg-gray-800 dark:hover:border-gray-800 dark:hover:text-amber-500";
  }

  if (variant === "primary") {
    buttonClasses = `${buttonClasses} text-lg`;
  }

  return (
    <Link
      className={`inline-block rounded-md border p-2.5 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 ${buttonClasses} ${className}`.trim()}
      {...props}
    >
      {children}
    </Link>
  );
}
