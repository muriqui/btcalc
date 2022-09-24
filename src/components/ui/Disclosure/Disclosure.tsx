import React, { useState } from "react";

interface DisclosureProps extends React.ComponentPropsWithoutRef<"details"> {
  summary: string;
  description?: string;
}

function Disclosure({
  summary,
  description,
  children,
  ...props
}: DisclosureProps) {
  const [open, setOpen] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setOpen(!open);
  };

  return (
    <details open={open} {...props}>
      <summary
        onClick={handleClick}
        className="relative flex w-full cursor-pointer select-none list-none items-center justify-between rounded-lg border border-slate-900 bg-slate-50 px-5 py-4 focus-within:outline-none focus-within:ring-2 focus-within:ring-amber-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-100 hover:bg-amber-300 dark:border-slate-300 dark:bg-transparent dark:focus-within:ring-offset-slate-900 dark:hover:border-amber-500 dark:hover:bg-amber-600 dark:hover:text-slate-900"
      >
        <div className="font-semibold">
          {summary}
          {description && (
            <span className="block text-sm font-normal italic">
              {description}
            </span>
          )}
        </div>
        <svg
          className="-mr-1 h-6 w-6 fill-current opacity-75"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
      </summary>
      {open && <div className="mx-4 my-8">{children}</div>}
    </details>
  );
}

export default Disclosure;
