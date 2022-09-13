import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RangeModifier from "./RangeModifier";

const handleChange = jest.fn();

test("renders RangeModifier", async () => {
  render(<RangeModifier onChange={handleChange} />);
  const mediumElement = screen.getByLabelText("Medium");
  await userEvent.click(mediumElement);
  expect(handleChange).toBeCalledWith(
    new Map([["Range", { label: "Medium", value: 2 }]])
  );
});
