import React from "react";

export interface TabControlProps
  extends Omit<React.ComponentPropsWithoutRef<"li">, "onChange"> {
  /** The tab label. */
  label: string;
  /** A unique identifer. Used as the base for the HTML id attributes on the tab control and the tab panel. */
  id: string;
  /** Whether this is the active tab. */
  selected?: boolean;
  onChange?: (label: string) => void;
}

/**
 * A clickable tab in a Tabs component.
 */
function TabControl({
  label,
  id,
  selected = false,
  onChange = () => {},
  ...props
}: TabControlProps) {
  return (
    <li role="presentation" {...props}>
      <button
        id={`${id}-tab`}
        role="tab"
        aria-selected={selected}
        aria-controls={`${id}-tabpanel`}
        tabIndex={selected ? -1 : 0}
        onClick={() => onChange(label)}
        className="inline-block h-12 w-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-100 dark:focus:ring-amber-400 dark:focus:ring-offset-slate-900"
      >
        {label}
      </button>
    </li>
  );
}

export default TabControl;
