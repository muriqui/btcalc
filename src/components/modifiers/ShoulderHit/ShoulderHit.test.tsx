import { commonModifierToggleTests } from "components/ui/ModifierToggle/ModifierToggle.test";
import ShoulderHit, { modifier } from "./ShoulderHit";

commonModifierToggleTests({ Component: ShoulderHit, ...modifier });
