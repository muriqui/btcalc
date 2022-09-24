import React from "react";

export interface SelectorProps extends React.ComponentPropsWithoutRef<"div"> {
  /** The label for the selector. */
  label: string;
}

/**
 * A selector for a list of options.
 */
function Selector({ label, children, ...props }: SelectorProps) {
  return (
    <div {...props}>
      <fieldset className="mb-4 space-y-2">
        <legend className="px-5 italic">{label}</legend>
        {children}
      </fieldset>
    </div>
  );
}

export default Selector;
