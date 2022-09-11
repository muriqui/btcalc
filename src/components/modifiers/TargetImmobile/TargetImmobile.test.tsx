import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TargetImmobile from "./TargetImmobile";

const handleChange = jest.fn();

test("renders TargetImmobile", async () => {
  render(<TargetImmobile onChange={handleChange} />);
  const element = screen.getByLabelText("Immobile");
  expect(element).not.toBeChecked();
  await userEvent.click(element);
  expect(handleChange).toBeCalledWith("Immobile", -4);
});

test("toggles TargetImmobile", async () => {
  render(<TargetImmobile checked={true} onChange={handleChange} />);
  const element = screen.getByLabelText("Immobile");
  expect(element).toBeChecked();
  await userEvent.click(element);
  expect(handleChange).toBeCalledWith("Immobile");
});

test("disabled TargetImmobile", () => {
  render(<TargetImmobile disabled={true} onChange={handleChange} />);
  const element = screen.getByLabelText("Immobile");
  expect(element).toHaveAttribute("aria-readonly", "true");
});
