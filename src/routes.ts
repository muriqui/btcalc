import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { System, Step } from "./types";

export default [
  index("./routes/Home.tsx"),
  route(System.AlphaStrike, "./routes/alpha-strike/AlphaStrike.tsx", [
    index("./routes/alpha-strike/Setup.tsx"),
    // TODO: route(Step.Movement, "./routes/alpha-strike/Movement.tsx"),
    // TODO: route(Step.Combat, "./routes/alpha-strike/Combat.tsx"),
    // TODO: route(Step.End, "/routes/alpha-strike/End.tsx"),
  ]),
  route(System.TotalWarfare, "./routes/total-warfare/TotalWarfare.tsx", [
    index("./routes/total-warfare/Setup.tsx"),
    route(Step.Movement, "./routes/total-warfare/Movement.tsx"),
    route(Step.Weapons, "./routes/total-warfare/Weapons.tsx"),
    // TODO: route(Step.Physical, "./routes/total-warfare/Physical.tsx"),
    // TODO: route(Step.End, "./routes/total-warfare/End.tsx"),
  ]),
] satisfies RouteConfig;
