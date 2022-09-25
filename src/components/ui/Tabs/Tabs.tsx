import React, { ReactElement, useState } from "react";
import TabControl from "./TabControl";

export interface TabsProps extends React.ComponentPropsWithoutRef<"div"> {
  children: ReactElement[];
}

/**
 * The wrapper for a set of Tab components.
 */
function Tabs({ children, ...props }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(children[0].props.label);
  const index = children.findIndex((item) => {
    return item.props.label === selectedTab;
  });

  return (
    <div {...props}>
      <div className="sticky top-0 z-10 bg-slate-200 dark:bg-slate-800">
        <ul role="tablist" className="flex flex-wrap sm:flex-nowrap">
          {children.map((item, index) => (
            <TabControl
              key={item.props.label}
              label={item.props.label}
              id={item.props.id}
              selected={item.props.label === selectedTab}
              onChange={setSelectedTab}
              className={`${
                item.props.label === selectedTab
                  ? "bg-white text-slate-900 dark:bg-slate-300"
                  : ""
              } flex-1 basis-1/3 hover:bg-gray-50 hover:text-slate-900 dark:hover:bg-slate-400`}
            />
          ))}
        </ul>
      </div>
      {children[index]}
    </div>
  );
}

export default Tabs;
