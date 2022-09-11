import { render, screen } from "@testing-library/react";
import Label from "./Label";

test("renders Label", () => {
  render(<Label>Yup</Label>);
  const labelElement = screen.getByText("Yup");
  expect(labelElement).toBeInTheDocument();
});
