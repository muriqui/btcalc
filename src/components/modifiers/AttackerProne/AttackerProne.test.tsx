import { commonModifierToggleTests } from "components/ui/ModifierToggle/ModifierToggle.test";
import AttackerProne, { modifier } from "./AttackerProne";

commonModifierToggleTests({ Component: AttackerProne, ...modifier });
