import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AttackerProne from "./AttackerProne";

const handleChange = jest.fn();

test("renders AttackerProne", async () => {
  render(<AttackerProne onChange={handleChange} />);
  const element = screen.getByLabelText("Prone");
  expect(element).not.toBeChecked();
  await userEvent.click(element);
  expect(handleChange).toBeCalledWith("Prone", 2);
});

test("toggles AttackerProne", async () => {
  render(<AttackerProne checked={true} onChange={handleChange} />);
  const element = screen.getByLabelText("Prone");
  expect(element).toBeChecked();
  await userEvent.click(element);
  expect(handleChange).toBeCalledWith("Prone");
});

test("disabled AttackerProne", () => {
  render(<AttackerProne disabled={true} onChange={handleChange} />);
  const element = screen.getByLabelText("Prone");
  expect(element).toHaveAttribute("aria-readonly", "true");
});
