import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RangeModifier from "./RangeModifier";

const handleChange = jest.fn();

test("renders RangeModifier", async () => {
  render(<RangeModifier onChange={handleChange} />);
  const minimumElement = screen.getByLabelText(
    "Target is within the weapon's minimum range"
  );
  await userEvent.click(minimumElement);
  expect(handleChange).toBeCalledWith(
    new Map([
      [
        "Minimum range",
        {
          label: "Minimum range",
          value: 0,
          state: {
            checked: true,
            minimumRange: undefined,
            targetRange: undefined,
          },
        },
      ],
    ])
  );
  const mediumElement = screen.getByLabelText("Medium");
  await userEvent.click(mediumElement);
  expect(handleChange).toBeCalledWith(
    new Map([["Range", { label: "Medium", value: 2 }]])
  );
});
