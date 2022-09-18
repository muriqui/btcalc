import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WoodsIntervening from "./WoodsIntervening";

const handleChange = jest.fn();

test("renders WoodsIntervening", async () => {
  render(<WoodsIntervening onChange={handleChange} />);
  const lightElement = screen.getByLabelText("Light woods");
  await userEvent.clear(lightElement);
  expect(handleChange).toBeCalledWith("Intervening woods", 0, {
    lightWoods: NaN,
    heavyWoods: undefined,
  });
  await userEvent.type(lightElement, "1");
  expect(handleChange).toBeCalledWith("Intervening woods", 1, {
    lightWoods: 1,
    heavyWoods: undefined,
  });
});

test("calculates WoodsIntervening", async () => {
  render(<WoodsIntervening lightWoods={0} heavyWoods={1} />);
  const modifierElement = screen.getByText("+2");
  expect(modifierElement).toBeInTheDocument();
});

test("calculates impossible shot due to WoodsIntervening", async () => {
  render(<WoodsIntervening lightWoods={1} heavyWoods={1} />);
  const modifierElement = screen.getByText("Impossible");
  expect(modifierElement).toBeInTheDocument();
});
