import type { Route } from "./+types/OpponentDelete";
import { redirect } from "react-router";
import { deleteOpponentUnit } from "~/services/utilityService";
import { System, Step } from "~/types";

/**
 * Child route of the Alpha Strike setup page to delete an opponent unit.
 */
export async function clientAction({
  params,
}: Pick<Route.ClientActionArgs, "params">) {
  await deleteOpponentUnit(params.unitId);
  return redirect(`/${System.AlphaStrike}/${Step.Setup}`);
}
