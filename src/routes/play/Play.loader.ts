import { getOpponents, getUnits } from "../../services/utilityService";

export default async function playLoader() {
  const units = await getUnits();
  const opponents = await getOpponents();
  return { units, opponents };
}
