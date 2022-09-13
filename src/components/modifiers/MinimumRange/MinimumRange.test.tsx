import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MinimumRange from "./MinimumRange";

const handleChange = jest.fn();

test("renders MinimumRange", async () => {
  render(<MinimumRange onChange={handleChange} />);
  const toggleElement = screen.getByLabelText(
    "Target is within the weapon's minimum range"
  );
  await userEvent.click(toggleElement);
  expect(handleChange).toBeCalledWith("Minimum range", 0, {
    checked: true,
    minimumRange: undefined,
    targetRange: undefined,
  });
});

test("calculates MinimumRange", async () => {
  render(
    <MinimumRange
      checked={true}
      minimumRange={3}
      targetRange={2}
      onChange={handleChange}
    />
  );
  const modifierElement = screen.getByText("+2");
  expect(modifierElement).toBeInTheDocument();
  const minimumRangeElement = screen.getByLabelText("Weapon's minimum range");
  await userEvent.clear(minimumRangeElement);
  expect(handleChange).toBeCalledWith("Minimum range", 0, {
    checked: true,
    minimumRange: undefined,
    targetRange: 2,
  });
  await userEvent.type(minimumRangeElement, "4");
  expect(handleChange).toBeCalledWith("Minimum range", 3, {
    checked: true,
    minimumRange: 4,
    targetRange: 2,
  });
});
