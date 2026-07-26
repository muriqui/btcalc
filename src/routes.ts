import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";
import { System, Step } from "./types";

export default [
  index("./routes/Home.tsx"),
  layout("./layouts/GameplayLayout.tsx", [
    ...prefix(System.AlphaStrike, [
      route(Step.Setup, "./routes/alpha-strike/setup/Setup.tsx", [
        route("player/add", "./routes/alpha-strike/setup/PlayerAdd.tsx"),
        route(
          "player/:unitId/edit",
          "./routes/alpha-strike/setup/PlayerEdit.tsx",
        ),
        route(
          "player/:unitId/delete",
          "./routes/alpha-strike/setup/PlayerDelete.tsx",
        ),
        route("opponent/add", "./routes/alpha-strike/setup/OpponentAdd.tsx"),
        route(
          "opponent/:unitId/edit",
          "./routes/alpha-strike/setup/OpponentEdit.tsx",
        ),
        route(
          "opponent/:unitId/delete",
          "./routes/alpha-strike/setup/OpponentDelete.tsx",
        ),
      ]),
      route(Step.Movement, "./routes/alpha-strike/movement/Movement.tsx"),
      // TODO: route(Step.Combat, "./routes/alpha-strike/combat/Combat.tsx"),
      // TODO: route(Step.End, "/routes/alpha-strike/end/End.tsx"),
    ]),
    ...prefix(System.TotalWarfare, [
      route(Step.Setup, "./routes/total-warfare/setup/Setup.tsx"),
    ]),
    // route("add/player", "./routes/total-warfare/setup/AddPlayer.tsx"),
    // route("player/:unitId", "./routes/total-warfare/setup/EditPlayer.tsx"),
    // route("add/opponent", "./routes/total-warfare/setup/AddOpponent.tsx"),
    // route(
    // "opponent/:unitId",
    // "./routes/total-warfare/setup/EditOpponent.tsx",
    // route(Step.Movement, "./routes/total-warfare/movement/Movement.tsx"),
    // route(Step.Weapons, "./routes/total-warfare/weapons/Weapons.tsx"),
    // TODO: route(Step.Physical, "./routes/total-warfare/physical/Physical.tsx"),
    // TODO: route(Step.End, "./routes/total-warfare/end/End.tsx"),
    // ]),
  ]),
] satisfies RouteConfig;
