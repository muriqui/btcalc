import type { Route } from "./+types/OpponentEdit";
import type { SetupOutletContext } from "./Setup";
import { useOutletContext } from "react-router";
import {
  default as ASOpponentUnitForm,
  type ASOpponentUnitFormFetcherData,
} from "~/components/organisms/ASOpponentUnitForm";
import {
  getASOpponentUnit,
  updateASOpponentUnit,
} from "~/services/alphaStrikeService";
import { getFormData } from "./getOpponentFormData";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const unit = await getASOpponentUnit(params.unitId);
  if (!unit) {
    return new Response("Unit not found", { status: 404 });
  }
  return { unit };
}

export async function clientAction({
  params,
  request,
}: Route.ClientActionArgs): Promise<ASOpponentUnitFormFetcherData> {
  try {
    // Attempt to save the updated unit.
    const { unitId } = params;
    const unit = await getASOpponentUnit(unitId);
    if (!unit) {
      throw new Error("Unknown unit.");
    }
    const formData = await getFormData(request);
    await updateASOpponentUnit({
      ...unit,
      ...formData,
    });
  } catch (error) {
    // Return an error message if the unit failed validation.
    if (error instanceof Error) {
      return { ok: false, error: error.message };
    }
    // Rethrow if it's of an unexpected type.
    throw error;
  }

  return { ok: true };
}

/**
 * Child route of the Alpha Strike setup page to edit an opponent unit.
 */
export default function OpponentEdit({
  loaderData,
}: Pick<Route.ComponentProps, "loaderData">) {
  const { unit } = loaderData;
  const { onClose } = useOutletContext<SetupOutletContext>();

  return <ASOpponentUnitForm unit={unit} onSave={onClose} onCancel={onClose} />;
}
