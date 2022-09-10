import { render, screen } from "@testing-library/react";
import NumberInput from "./NumberInput";

test("renders NumberInput", () => {
  render(<NumberInput label="Yup" value={0} />);
  const inputElement = screen.getByLabelText("Yup");
  expect(inputElement).toBeInTheDocument();
});
