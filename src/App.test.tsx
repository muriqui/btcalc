import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app", () => {
  render(<App />);
  const h1Element = screen.getByText("BattleTech Calculator");
  expect(h1Element).toBeInTheDocument();
});
