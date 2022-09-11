import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TargetHexesMoved from "./TargetHexesMoved";

const handleChange = jest.fn();

test("renders TargetHexesMoved", async () => {
  render(
    <TargetHexesMoved selected="Moved 3–4 hexes" onChange={handleChange} />
  );
  const threeElement = screen.getByLabelText("Moved 3–4 hexes");
  expect(threeElement).toBeChecked();
  const fiveEleement = screen.getByLabelText("Moved 5–6 hexes");
  expect(fiveEleement).not.toBeChecked();
  await userEvent.click(fiveEleement);
  expect(handleChange).toBeCalledWith("Moved 5–6 hexes", 2);
});

test("disables TargetHexesMoved", () => {
  render(<TargetHexesMoved disabled={true} />);
  const element = screen.getByLabelText("Moved 0–2 hexes");
  expect(element).toBeChecked();
  expect(element).toBeDisabled();
});
