import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";
import { Step } from "./types";

export default [
  index("./routes/Home.tsx"),
  ...prefix("play", [
    layout("./routes/play/Play.tsx", [
      index("./routes/play/Setup.tsx"),
      route(Step.Movement, "./routes/play/movement/Movement.tsx"),
      route(Step.SelectTargets, "./routes/play/targets/SelectTargets.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
