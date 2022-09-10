import { formatModifier } from "./modifiers";

it("formats modifiers", () => {
  expect(formatModifier(2)).toEqual("+2");
  expect(formatModifier(0)).toEqual("0");
  expect(formatModifier(-2)).toEqual("-2");
});
