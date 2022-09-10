/**
 * Utilities for working with modifier values.
 */

/**
 * Formats a modifier value.
 */
export function formatModifier(value: number): string {
  return (value <= 0 ? "" : "+") + value;
}
