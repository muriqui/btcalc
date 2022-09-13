import { render, screen } from "@testing-library/react";
import NumberInput from "./NumberInput";

test("renders NumberInput", () => {
  render(<NumberInput label="Yup" value={0} />);
  const inputElement = screen.getByLabelText("Yup");
  expect(inputElement).toBeInTheDocument();
});

test("disables NumberInput", () => {
  render(<NumberInput label="Nope" value={0} disabled={true} />);
  const inputElement = screen.getByLabelText("Nope");
  expect(inputElement).toBeDisabled();
});
