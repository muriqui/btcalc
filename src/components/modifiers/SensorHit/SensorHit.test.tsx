import { commonModifierToggleTests } from "components/ui/ModifierToggle/ModifierToggle.test";
import SensorHit, { modifier } from "./SensorHit";

commonModifierToggleTests({ Component: SensorHit, ...modifier });
