import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AttackerMovement from "./AttackerMovement";

const handleChange = jest.fn();

test("renders AttackerMovement", async () => {
  render(<AttackerMovement selected="Ran" onChange={handleChange} />);
  const ranElement = screen.getByLabelText("Ran");
  expect(ranElement).toBeChecked();
  const walkedElement = screen.getByLabelText("Walked");
  expect(walkedElement).not.toBeChecked();
  await userEvent.click(walkedElement);
  expect(handleChange).toBeCalledWith("Walked", 1);
});

test("disables AttackerMovement", () => {
  render(<AttackerMovement disabled={true} />);
  const stationaryElement = screen.getByLabelText("Stationary");
  expect(stationaryElement).toBeChecked();
  expect(stationaryElement).toBeDisabled();
});
