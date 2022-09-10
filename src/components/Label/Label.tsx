import React from "react";

interface Props extends React.ComponentPropsWithoutRef<"label"> {
  /** Whether the component is against a dark background. */
  darkBackground?: boolean;
}

/**
 * A form label.
 */
function Label({ children, darkBackground, ...props }: Props) {
  return (
    <label
      className={`${
        darkBackground ? "text-white" : "text-gray-900"
      } block cursor-pointer font-medium`}
      {...props}
    >
      {children}
    </label>
  );
}

export default Label;
