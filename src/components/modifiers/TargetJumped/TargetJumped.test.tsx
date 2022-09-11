import { commonModifierToggleTests } from "components/ui/ModifierToggle/ModifierToggle.test";
import TargetJumped, { modifier } from "./TargetJumped";

commonModifierToggleTests({ Component: TargetJumped, ...modifier });
