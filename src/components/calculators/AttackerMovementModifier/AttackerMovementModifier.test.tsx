import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AttackerMovementModifier from "./AttackerMovementModifier";

const handleChange = jest.fn();

test("renders AttackerMovementModifier", async () => {
  render(<AttackerMovementModifier onChange={handleChange} />);
  const ranElement = screen.getByLabelText("Ran");
  await userEvent.click(ranElement);
  expect(handleChange).toBeCalledWith(
    new Map([["Movement", { label: "Ran", value: 2 }]])
  );
});
