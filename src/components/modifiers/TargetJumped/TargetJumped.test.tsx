import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TargetJumped from "./TargetJumped";

const handleChange = jest.fn();

test("renders TargetJumped", async () => {
  render(<TargetJumped onChange={handleChange} />);
  const element = screen.getByLabelText("Jumped");
  expect(element).not.toBeChecked();
  await userEvent.click(element);
  expect(handleChange).toBeCalledWith("Jumped", 1);
});

test("toggles TargetJumped", async () => {
  render(<TargetJumped checked={true} onChange={handleChange} />);
  const element = screen.getByLabelText("Jumped");
  expect(element).toBeChecked();
  await userEvent.click(element);
  expect(handleChange).toBeCalledWith("Jumped");
});

test("disables TargetJumped", () => {
  render(<TargetJumped disabled={true} onChange={handleChange} />);
  const element = screen.getByLabelText("Jumped");
  expect(element).toHaveAttribute("aria-readonly", "true");
});
