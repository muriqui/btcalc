import { commonModifierToggleTests } from "components/ui/ModifierToggle/ModifierToggle.test";
import PartialCover, { modifier } from "./PartialCover";

commonModifierToggleTests({ Component: PartialCover, ...modifier });
