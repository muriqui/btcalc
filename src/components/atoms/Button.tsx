import { HTMLAttributes } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** How the button is displayed. */
  variant?: "text" | "filled" | "outlined" | "primary";
  /** Is the button disabled? */
  disabled?: boolean;
  /** The button type. */
  type?: "button" | "submit";
}

/**
 * A button.
 */
export default function Button({
  variant = "text",
  className = "",
  children,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  let buttonClasses = "";
  switch (variant) {
    case "primary":
    case "filled":
      buttonClasses = disabled
        ? "bg-gray-200 border-gray-200 text-gray-600 shadow-sm dark:bg-gray-800 dark:border-gray-800 dark:text-gray-400"
        : "bg-amber-800 border-amber-800 text-white shadow-sm hover:bg-amber-700 hover:border-amber-700";
      break;

    case "outlined":
      buttonClasses = disabled
        ? "border-gray-400 text-gray-400 shadow-sm"
        : "border-amber-800 text-amber-800 shadow-sm hover:bg-gray-50 hover:border-amber-700 hover:text-amber-700 dark:border-amber-600 dark:text-amber-600 hover:dark:bg-gray-800 hover:dark:border-amber-500 hover:dark:text-amber-500";
      break;

    case "text":
    default:
      buttonClasses = disabled
        ? "border-transparent text-gray-400"
        : "border-transparent text-amber-800 hover:bg-gray-50 hover:border-gray-50 hover:text-amber-700 dark:text-amber-600 hover:dark:bg-gray-800 hover:dark:border-gray-800 hover:dark:text-amber-500";
  }

  if (variant === "primary") {
    buttonClasses = `${buttonClasses} text-lg`;
  }

  if (disabled) {
    buttonClasses = `${buttonClasses} cursor-not-allowed select-none`;
  }

  return (
    <button
      type={type}
      className={`rounded-md border p-2.5 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 ${buttonClasses} ${className}`.trim()}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
