import { render, screen } from "@testing-library/react";
import TopBar from "./TopBar";

test("renders TopBar", () => {
  render(<TopBar />);
  const element = screen.getByText("BattleTech Calculator");
  expect(element).toBeInTheDocument();
});
