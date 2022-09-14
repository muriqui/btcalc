import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Disclosure from "./Disclosure";

test("renders Disclosure", async () => {
  render(
    <Disclosure summary="Let's see what's in the box!">
      Nothing! Absolutely nothing!
    </Disclosure>
  );
  let detailsElement = screen.queryByText("Nothing! Absolutely nothing!");
  expect(detailsElement).toBeNull();
  const summaryElement = screen.getByText("Let's see what's in the box!");
  await userEvent.click(summaryElement);
  detailsElement = screen.getByText("Nothing! Absolutely nothing!");
  expect(detailsElement).toBeInTheDocument();
});
