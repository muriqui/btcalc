import {
  formatModifier,
  totalModifiers,
  summarizeModifiers,
} from "./modifiers";

it("formats modifiers", () => {
  expect(formatModifier(2)).toEqual("+2");
  expect(formatModifier(0)).toEqual("0");
  expect(formatModifier(-2)).toEqual("-2");
});

const modifiers = new Map<string, number>([
  ["Walked", 1],
  ["Ran", 2],
]);

it("totals modifiers", () => {
  expect(totalModifiers(modifiers)).toEqual(3);
});

it("summarizes modifiers", () => {
  expect(summarizeModifiers(modifiers)).toEqual("Walked +1, Ran +2");
});
