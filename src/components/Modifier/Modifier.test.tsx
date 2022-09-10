import { render, screen } from "@testing-library/react";
import Modifier from "./Modifier";

test("renders Modifier", () => {
  render(<Modifier value={2} />);
  const textElement = screen.getByText("+2");
  expect(textElement).toBeInTheDocument();
});
