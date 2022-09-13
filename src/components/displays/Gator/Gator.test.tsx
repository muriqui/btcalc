import { render, screen } from "@testing-library/react";
import Gator from "./Gator";

test("renders Gator", async () => {
  render(<Gator />);
  const totalElement = screen.getByText("Total: 4");
  expect(totalElement).toBeInTheDocument();
});
