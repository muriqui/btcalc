import { render, screen } from "@testing-library/react";
import GunnerySkill from "./GunnerySkill";

test("renders GunnerySkill", () => {
  render(<GunnerySkill />);
  const inputElement = screen.getByLabelText("Gunnery skill");
  expect(inputElement).toBeInTheDocument();
});
