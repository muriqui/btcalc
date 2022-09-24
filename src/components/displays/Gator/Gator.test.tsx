import { render, screen } from "@testing-library/react";
import Gator from "./Gator";

test("renders Gator", async () => {
  render(<Gator />);
  const totalElement = screen.getByText("Roll 4 or higher to hit");
  expect(totalElement).toBeInTheDocument();
});
