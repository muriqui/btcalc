import type { Route } from "./+types/PlayerDelete";
import { redirect } from "react-router";
import { deletePlayerUnit } from "~/services/utilityService";
import { System, Step } from "~/types";

/**
 * Child route of the Alpha Strike setup page to delete a player unit.
 */
export async function clientAction({
  params,
}: Pick<Route.ClientActionArgs, "params">) {
  await deletePlayerUnit(params.unitId);
  return redirect(`/${System.AlphaStrike}/${Step.Setup}`);
}
