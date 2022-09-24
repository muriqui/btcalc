import { render, screen } from "@testing-library/react";
import Result from "./Result";

test("renders Result", () => {
  render(<Result value={4} />);
  const element = screen.getByText("Roll 4 or higher to hit");
  expect(element).toBeInTheDocument();
});

test("Result correctly reports maximum", () => {
  render(<Result value={12} />);
  const element = screen.getByText("Roll 12 to hit");
  expect(element).toBeInTheDocument();
});

test("Result reports automatic hit", () => {
  render(<Result value={2} />);
  const element = screen.getByText("Automatic hit");
  expect(element).toBeInTheDocument();
});

test("Result reports impossible shot", () => {
  render(<Result value={13} />);
  const element = screen.getByText("Impossible");
  expect(element).toBeInTheDocument();
});
