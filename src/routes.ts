import type { RouteConfig } from "@react-router/dev/routes";
import { Step } from "./types";

export default [
  {
    path: "/",
    file: "./routes/Root.tsx",
    children: [{ index: true, file: "./routes/Home.tsx" }],
  },
  {
    path: "play",
    file: "./routes/play/Play.tsx",
    children: [
      { index: true, file: "./routes/play/Setup.tsx" },
      {
        path: Step.Movement,
        file: "./routes/play/movement/Movement.tsx",
      },
      {
        path: Step.SelectTargets,
        file: "./routes/play/targets/SelectTargets.tsx",
      },
    ],
  },
] satisfies RouteConfig;
