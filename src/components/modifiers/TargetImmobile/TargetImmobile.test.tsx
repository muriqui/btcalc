import { commonModifierToggleTests } from "components/ui/ModifierToggle/ModifierToggle.test";
import TargetImmobile, { modifier } from "./TargetImmobile";

commonModifierToggleTests({ Component: TargetImmobile, ...modifier });
