import { commonModifierToggleTests } from "components/ui/ModifierToggle/ModifierToggle.test";
import TargetProne, { modifier } from "./TargetProne";

commonModifierToggleTests({ Component: TargetProne, ...modifier });
