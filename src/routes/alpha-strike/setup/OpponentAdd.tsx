import type { Route } from "./+types/OpponentAdd";
import type { SetupOutletContext } from "./Setup";
import { useOutletContext } from "react-router";
import {
  default as ASOpponentUnitForm,
  type ASOpponentUnitFormFetcherData,
} from "~/components/organisms/ASOpponentUnitForm";
import { addASOpponentUnit } from "~/services/alphaStrikeService";
import { getFormData } from "./getOpponentFormData";

export async function clientAction({
  request,
}: Route.ClientLoaderArgs): Promise<ASOpponentUnitFormFetcherData> {
  try {
    // Attempt to save the new unit.
    const formData = await getFormData(request);
    await addASOpponentUnit(formData);
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
 * Child route of the Alpha Strike setup page to add an opponent unit.
 */
export default function OpponentAdd() {
  const { onClose } = useOutletContext<SetupOutletContext>();

  return <ASOpponentUnitForm onSave={onClose} onCancel={onClose} />;
}
