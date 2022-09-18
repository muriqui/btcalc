import {
  modifierInterface,
  formatModifier,
  totalModifiers,
  summarizeModifiers,
} from "./modifiers";

it("formats modifiers", () => {
  expect(formatModifier(2)).toEqual("+2");
  expect(formatModifier(0)).toEqual("0");
  expect(formatModifier(-2)).toEqual("-2");
  expect(formatModifier(Infinity)).toEqual("Impossible");
});

const modifiers = new Map<string, modifierInterface>([
  ["Movement", { label: "Walked", value: 1 }],
  ["Prone", { label: "Prone", value: 2 }],
]);

it("totals modifiers", () => {
  expect(totalModifiers(modifiers)).toEqual(3);
});

it("summarizes modifiers", () => {
  expect(summarizeModifiers(modifiers)).toEqual("Walked +1, Prone +2");
});
