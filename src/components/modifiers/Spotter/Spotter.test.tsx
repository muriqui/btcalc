import { commonModifierToggleTests } from "components/ui/ModifierToggle/ModifierToggle.test";
import Spotter, { modifier } from "./Spotter";

commonModifierToggleTests({ Component: Spotter, ...modifier });
