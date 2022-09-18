import { commonModifierToggleTests } from "components/ui/ModifierToggle/ModifierToggle.test";
import SensorHitSecond, { modifier } from "./SensorHitSecond";

commonModifierToggleTests({ Component: SensorHitSecond, ...modifier });
