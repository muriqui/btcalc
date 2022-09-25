import React from "react";

export interface TabProps extends React.ComponentPropsWithoutRef<"div"> {
  /** The tab label. */
  label: string;
  /** A unique identifer. Used as the base for the HTML id attributes on the tab control and the tab panel. */
  id: string;
}

/**
 * A tab in a Tabs component.
 */
function Tab({ id, children, ...props }: TabProps) {
  return (
    <div
      id={`${id}-tabpanel`}
      aria-labelledby={`${id}-tab`}
      role="tabpanel"
      {...props}
    >
      {children}
    </div>
  );
}

export default Tab;
