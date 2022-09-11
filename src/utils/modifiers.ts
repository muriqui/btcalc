/**
 * Utilities for working with modifier values.
 */
import { ModifierToggleProps } from "components/ui/ModifierToggle/ModifierToggle";
import { SelectorProps } from "components/ui/Selector/Selector";

/**
 * Defines props for components that extend Selector/ModifierSelectorOption.
 */
export interface ModifierSelectorExtensionProps
  extends Omit<SelectorProps, "label" | "children" | "onChange"> {
  /** The label of the currently selected option. */
  selected?: string;
  /** Whether the selector options should be disabled. */
  disabled?: boolean;
  onChange?: (label: string, value: number) => void;
}

/**
 * Defines props for components that extend ModifierToggle.
 */
export interface ModifierToggleExtensionProps
  extends Omit<ModifierToggleProps, "label" | "description" | "value"> {}

/**
 * Formats a modifier value.
 */
export function formatModifier(value: number): string {
  return (value <= 0 ? "" : "+") + value;
}
