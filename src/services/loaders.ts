import { getOpponents, getStep, getUnits } from "./utilityService";

/**
 * Loader for the Home route.
 */
export async function loaderHome() {
  const step = await getStep();
  return { step };
}

/**
 * Loader for the Movement route.
 */
export async function loaderMovement() {
  const units = await getUnits();
  const opponents = await getOpponents();
  return { units, opponents };
}

/**
 * Loader for the SelectTargets route.
 */
export async function loaderSelectTargets() {
  const units = await getUnits();
  return { units };
}
