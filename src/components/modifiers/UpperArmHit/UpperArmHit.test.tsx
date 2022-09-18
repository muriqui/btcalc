import { commonModifierToggleTests } from "components/ui/ModifierToggle/ModifierToggle.test";
import UpperArmHit, { modifier } from "./UpperArmHit";

commonModifierToggleTests({ Component: UpperArmHit, ...modifier });
