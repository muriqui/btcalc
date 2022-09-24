import React from "react";

interface ResultProps {
  value: number;
}

function Result({ value }: ResultProps) {
  let text: string, frame: string;
  if (value <= 2) {
    text = "Automatic hit";
    frame = "bg-sky-300 dark:bg-sky-700";
  } else if (value > 12) {
    text = "Impossible";
    frame = "bg-red-300 dark:bg-red-800";
  } else {
    text = `Roll ${value}${value < 12 ? " or higher" : ""} to hit`;
    frame = "bg-slate-300 dark:bg-slate-500";
  }

  return (
    <div
      className={`${frame} flex h-14 items-center border-8 border-slate-100 dark:border-slate-900`}
    >
      <h2 className="sr-only">Result</h2>
      <p className="w-full text-center text-lg font-semibold dark:text-white">
        {text}
      </p>
    </div>
  );
}

export default Result;
