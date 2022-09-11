import { commonModifierToggleTests } from "components/ui/ModifierToggle/ModifierToggle.test";
import TargetProneAdjacent, { modifier } from "./TargetProneAdjacent";

commonModifierToggleTests({ Component: TargetProneAdjacent, ...modifier });
