import type { Route } from "./+types/PlayerAdd";
import type { SetupOutletContext } from "./Setup";
import { useOutletContext } from "react-router";
import {
  default as ASPlayerUnitForm,
  type ASPlayerUnitFormFetcherData,
} from "~/components/organisms/ASPlayerUnitForm";
import { addASPlayerUnit } from "~/services/alphaStrikeService";
import { getFormData } from "./getPlayerFormData";

export async function clientAction({
  request,
}: Route.ClientActionArgs): Promise<ASPlayerUnitFormFetcherData> {
  try {
    // Attempt to save the new unit.
    const formData = await getFormData(request);
    await addASPlayerUnit(formData);
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
 * Child route of the Alpha Strike setup page to add a player unit.
 */
export default function PlayerAdd() {
  const { onClose } = useOutletContext<SetupOutletContext>();

  return <ASPlayerUnitForm onSave={onClose} onCancel={onClose} />;
}
