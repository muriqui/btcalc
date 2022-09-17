import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OtherModifiers from "./OtherModifiers";

const handleChange = jest.fn();

test("renders OtherModifiers", async () => {
  render(<OtherModifiers onChange={handleChange} />);
  const heatElement = screen.getByLabelText("8–12 heat");
  await userEvent.click(heatElement);
  expect(handleChange).toBeCalledWith(
    new Map([["Heat", { label: "8–12 heat", value: 1 }]])
  );
});
