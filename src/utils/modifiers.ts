/**
 * Utilities for working with modifier values.
 */

/**
 * Formats a modifier value.
 */
export function formatModifier(value: number): string {
  return (value <= 0 ? "" : "+") + value;
}

/**
 * Calculates the total of a list of modifiers.
 */
export function totalModifiers(modifiers: Map<string, number>): number {
  let total = 0;
  modifiers.forEach((value) => (total += value));
  return total;
}

/**
 * Summarizes a list of modifiers.
 */
export function summarizeModifiers(modifiers: Map<string, number>): string {
  const summary: string[] = [];
  modifiers.forEach((value, label) => {
    if (value !== 0) {
      summary.push(`${label} ${formatModifier(value)}`);
    }
  });
  return summary.join(", ");
}
