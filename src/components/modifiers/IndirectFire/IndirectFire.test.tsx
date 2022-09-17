import { commonModifierToggleTests } from "components/ui/ModifierToggle/ModifierToggle.test";
import IndirectFire, { modifier } from "./IndirectFire";

commonModifierToggleTests({ Component: IndirectFire, ...modifier });
