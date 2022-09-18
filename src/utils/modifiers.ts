/**
 * Utilities for working with modifier values.
 */

export interface modifierInterface {
  label: string;
  value?: number;
  state?: any;
}

/**
 * Formats a modifier value.
 */
export function formatModifier(value: number): string {
  if (value === Infinity) {
    return "Impossible";
  }
  return (value <= 0 ? "" : "+") + value;
}

/**
 * Calculates the total of a list of modifiers.
 */
export function totalModifiers(
  modifiers: Map<string, modifierInterface>
): number {
  let total = 0;
  modifiers.forEach((modifier) => {
    if (modifier.value) {
      total += modifier.value;
    }
  });
  return total;
}

/**
 * Summarizes a list of modifiers.
 */
export function summarizeModifiers(
  modifiers: Map<string, modifierInterface>
): string {
  const summary: string[] = [];
  modifiers.forEach((modifier) => {
    if (modifier.value) {
      summary.push(`${modifier.label} ${formatModifier(modifier.value)}`);
    }
  });
  return summary.join(", ");
}
