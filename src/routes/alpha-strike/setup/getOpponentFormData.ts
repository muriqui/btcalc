/**
 * @file Form data retrieval and validation for the Alpha Strike opponent add/edit forms.
 */

import type { ASOpponentInterface } from "~/services/alphaStrikeService";

export async function getFormData(
  request: Request,
): Promise<Omit<ASOpponentInterface, "id">> {
  const formData = await request.formData();
  const name = formData.get("name") ?? "";
  const tmm = formData.get("tmm") ?? "";
  const jump = formData.get("jump") ?? "";
  const jumpTmm = formData.get("jumpTmm") ?? "";
  const stl = formData.get("stl") ?? "";

  if (
    typeof name !== "string" ||
    typeof tmm !== "string" ||
    typeof jump !== "string" ||
    typeof jumpTmm !== "string" ||
    typeof stl !== "string"
  ) {
    throw new Error("Unexpected form value data type.");
  }

  return {
    name: name.trim(),
    tmm: parseInt(tmm),
    jump: jump === "on",
    jumpTmm: parseInt(jumpTmm),
    stl: stl === "on",
  };
}
