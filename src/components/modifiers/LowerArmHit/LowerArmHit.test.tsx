import { commonModifierToggleTests } from "components/ui/ModifierToggle/ModifierToggle.test";
import LowerArmHit, { modifier } from "./LowerArmHit";

commonModifierToggleTests({ Component: LowerArmHit, ...modifier });
