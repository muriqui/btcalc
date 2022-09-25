import React from "react";

interface ResultProps extends React.ComponentPropsWithoutRef<"div"> {
  value: number;
  htmlFor?: string;
  form?: string;
}

function Result({
  value,
  htmlFor = undefined,
  form = undefined,
  ...props
}: ResultProps) {
  let text: string, bg: string;
  if (isNaN(value)) {
    text = "Invalid entry";
    bg = "bg-black text-white";
  } else if (value <= 2) {
    text = "Automatic hit";
    bg = "bg-sky-700 text-white";
  } else if (value > 12) {
    text = "Impossible";
    bg = "bg-red-700 dark:bg-red-800 text-white";
  } else {
    text = `Roll ${value}${value < 12 ? " or higher" : ""} to hit`;
    bg = "bg-slate-300 dark:bg-slate-500 dark:text-white";
  }

  return (
    <div {...props}>
      <output
        htmlFor={htmlFor}
        form={form}
        className={`${bg} inline-flex h-full w-full items-center justify-center text-lg font-semibold`}
      >
        {text}
      </output>
    </div>
  );
}

export default Result;
