import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tabs from "./Tabs";
import Tab from "./Tab";

const options = [
  {
    label: "Tab one",
    id: "1",
    content: "This is the first tab.",
  },
  {
    label: "Tab two",
    id: "2",
    content: "This is the second tab.",
  },
];

test("renders Tabs", async () => {
  render(
    <Tabs>
      {options.map((option) => (
        <Tab key={option.label} label={option.label} id={option.id}>
          {option.content}
        </Tab>
      ))}
    </Tabs>
  );
  const firstTabElement = screen.getByText("Tab one");
  expect(firstTabElement).toBeInTheDocument();
  const firstTabPanelElement = screen.getByText("This is the first tab.");
  expect(firstTabPanelElement).toBeInTheDocument();
  const secondTabElement = screen.getByText("Tab two");
  let secondTabPanelElement = screen.queryByText("This is the second tab.");
  expect(secondTabPanelElement).not.toBeInTheDocument();
  await userEvent.click(secondTabElement);
  secondTabPanelElement = screen.queryByText("This is the second tab.");
  expect(secondTabPanelElement).toBeInTheDocument();
});
