import React from "react";

/**
 * A form label.
 */
function Label({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"label">) {
  return (
    <label className={"block cursor-pointer"} {...props}>
      {children}
    </label>
  );
}

export default Label;
