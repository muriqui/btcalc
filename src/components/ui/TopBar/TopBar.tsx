import React from "react";

function TopBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 flex h-12 items-center bg-amber-400 text-slate-900">
      <h1 className="w-full text-center text-lg font-semibold">
        BattleTech Calculator
      </h1>
    </header>
  );
}

export default TopBar;
