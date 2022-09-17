import { commonModifierToggleTests } from "components/ui/ModifierToggle/ModifierToggle.test";
import SecondaryTargetForward, { modifier } from "./SecondaryTargetForward";

commonModifierToggleTests({ Component: SecondaryTargetForward, ...modifier });
