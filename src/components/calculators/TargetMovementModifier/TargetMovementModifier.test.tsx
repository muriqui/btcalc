import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TargetMovementModifier from "./TargetMovementModifier";

const handleChange = jest.fn();

test("renders TargetMovementModifier", async () => {
  render(<TargetMovementModifier onChange={handleChange} />);
  const immobileElement = screen.getByLabelText("Immobile");
  await userEvent.click(immobileElement);
  expect(handleChange).toBeCalledWith(
    new Map([["Immobile", { label: "Immobile", value: -4 }]])
  );
});
