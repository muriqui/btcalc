import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { Step } from "./types";

export default [
  index("./routes/Home.tsx"),
  route("play", "./routes/play/Play.tsx", [
    index("./routes/play/Setup.tsx"),
    route(Step.Movement, "./routes/play/movement/Movement.tsx"),
    route(Step.SelectTargets, "./routes/play/targets/SelectTargets.tsx"),
  ]),
] satisfies RouteConfig;
