import { commonModifierToggleTests } from "components/ui/ModifierToggle/ModifierToggle.test";
import IndirectFireSpotterAttacked, {
  modifier,
} from "./IndirectFireSpotterAttacked";

commonModifierToggleTests({
  Component: IndirectFireSpotterAttacked,
  ...modifier,
});
