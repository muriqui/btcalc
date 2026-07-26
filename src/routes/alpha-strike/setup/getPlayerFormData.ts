/**
 * @file Form data retrieval and validation for the Alpha Strike player add/edit forms.
 */

import type { ASPlayerInterface } from "~/services/alphaStrikeService";

export async function getFormData(
  request: Request,
): Promise<Omit<ASPlayerInterface, "id">> {
  const formData = await request.formData();
  const name = formData.get("name") ?? "";
  const skill = formData.get("skill") ?? "";
  const jump = formData.get("jump") ?? "";

  if (
    typeof name !== "string" ||
    typeof skill !== "string" ||
    typeof jump !== "string"
  ) {
    throw new Error("Unexpected form value data type.");
  }

  return {
    name: name.trim(),
    skill: parseInt(skill),
    jump: jump === "on",
  };
}
