import { getStep } from "../../services/utilityService";

export default async function homeLoader() {
  const step = await getStep();
  return { step };
}
