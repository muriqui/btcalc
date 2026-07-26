import type { Route } from "./+types/PlayerEdit";
import type { SetupOutletContext } from "./Setup";
import { useOutletContext } from "react-router";
import {
  default as ASPlayerUnitForm,
  type ASPlayerUnitFormFetcherData,
} from "~/components/organisms/ASPlayerUnitForm";
import {
  getASPlayerUnit,
  updateASPlayerUnit,
} from "~/services/alphaStrikeService";
import { getFormData } from "./getPlayerFormData";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const unit = await getASPlayerUnit(params.unitId);
  if (!unit) {
    return new Response("Unit not found", { status: 404 });
  }
  return { unit };
}

export async function clientAction({
  params,
  request,
}: Route.ClientActionArgs): Promise<ASPlayerUnitFormFetcherData> {
  try {
    // Attempt to save the updated unit.
    const { unitId } = params;
    const unit = await getASPlayerUnit(unitId);
    if (!unit) {
      throw new Error("Unknown unit.");
    }
    const formData = await getFormData(request);
    await updateASPlayerUnit({
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
 * Child route of the Alpha Strike setup page to edit a player unit.
 */
export default function PlayerEdit({
  loaderData,
}: Pick<Route.ComponentProps, "loaderData">) {
  const { unit } = loaderData;
  const { onClose } = useOutletContext<SetupOutletContext>();

  return <ASPlayerUnitForm unit={unit} onSave={onClose} onCancel={onClose} />;
}
