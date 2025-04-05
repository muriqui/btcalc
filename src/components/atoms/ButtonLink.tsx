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
        "bg-amber-800 border-amber-800 text-white shadow-sm hover:bg-amber-700 hover:border-amber-700";
      break;

    case "outlined":
      buttonClasses =
        "border-amber-800 text-amber-800 shadow-sm hover:bg-gray-50 hover:border-amber-700 hover:text-amber-700 dark:border-amber-600 dark:text-amber-600 hover:dark:bg-gray-800 hover:dark:border-amber-500 hover:dark:text-amber-500";
      break;

    case "text":
    default:
      buttonClasses =
        "border-transparent text-amber-800 hover:bg-gray-50 hover:border-gray-50 hover:text-amber-700 dark:text-amber-600 hover:dark:bg-gray-800 hover:dark:border-gray-800 hover:dark:text-amber-500";
  }

  if (variant === "primary") {
    buttonClasses = `${buttonClasses} text-lg`;
  }

  return (
    <Link
      className={`inline-block rounded-md border p-2.5 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 ${buttonClasses} ${className}`.trim()}
      {...props}
    >
      {children}
    </Link>
  );
}
