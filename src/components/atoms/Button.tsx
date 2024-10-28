import { HTMLAttributes } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** Is this the primary button on the page? */
  primary?: boolean;
}

/**
 * A button.
 */
export default function Button({
  primary = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const buttonClasses = primary
    ? "rounded-md bg-amber-800 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800"
    : "px-2.5 py-2.5 font-semibold text-amber-800 hover:text-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 dark:text-amber-600 hover:dark:text-amber-500";
  return (
    <button className={`${buttonClasses} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
