import { ActionFunctionArgs, redirect } from "react-router-dom";
import qs from "qs";
import { UnitInterface, OpponentInterface } from "../../../types";
import { setUnits, setOpponents } from "../../../services/utilityService";
import { setStep } from "../../../services/utilityService";
import { Step } from "../../../types";

interface QueryUnits {
  id?: string;
  name?: string;
  gunnery?: string;
}

interface QueryOpponents {
  id?: string;
  name?: string;
}

interface QueryParams {
  units?: QueryUnits[];
  opponents?: QueryOpponents[];
}

export interface ActionErrorData {
  unnamed?: string;
}

export default async function setupAction({ request }: ActionFunctionArgs) {
  const text = await request.text();
  const { units, opponents } = qs.parse(text) as QueryParams;

  // Validate the player's units.
  const validatedUnits: UnitInterface[] = [];
  if (Array.isArray(units)) {
    units.forEach((unit) => {
      const id = unit?.id;
      const name = unit?.name;
      const gunnery =
        typeof unit?.gunnery === "string" ? parseInt(unit.gunnery) : NaN;

      if (
        typeof id === "string" &&
        id.length > 0 &&
        typeof name === "string" &&
        name.length > 0 &&
        !isNaN(gunnery)
      ) {
        validatedUnits.push({ id, name, gunnery });
      }
    });
  }

  // Validate the opponent's units.
  const validatedOpponents: OpponentInterface[] = [];
  if (Array.isArray(opponents)) {
    opponents.forEach((opponent) => {
      const id = opponent?.id;
      const name = opponent?.name;

      if (
        typeof id === "string" &&
        id.length > 0 &&
        typeof name === "string" &&
        name.length > 0
      ) {
        validatedOpponents.push({ id, name });
      }
    });
  }

  // If either side lacks a valid unit, return error data to the form.
  if (!validatedUnits.length || !validatedOpponents.length) {
    const errors: ActionErrorData = {
      unnamed: "Each team must have at least one named unit.",
    };
    return errors;
  }

  // Save the validated data and go to Movement page to start the game.
  setUnits(validatedUnits);
  setOpponents(validatedOpponents);
  setStep(Step.Movement);
  return redirect(`/play/${Step.Movement}`);
}
