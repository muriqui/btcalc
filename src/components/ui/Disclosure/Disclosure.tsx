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
        className="relative flex w-full cursor-pointer select-none list-none items-center justify-between rounded-lg border bg-white px-5 py-4 shadow-md focus-within:outline-none focus-within:ring-2 focus-within:ring-white focus-within:ring-opacity-60 focus-within:ring-offset-2 focus-within:ring-offset-sky-300 hover:bg-sky-100"
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
      {open && <div className="m-4">{children}</div>}
    </details>
  );
}

export default Disclosure;
