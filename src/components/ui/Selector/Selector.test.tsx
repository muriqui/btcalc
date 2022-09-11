import { render, screen } from "@testing-library/react";
import Selector from "./Selector";
import SelectorOption from "./SelectorOption";

const label = "Heads or tails?";
const options = [
  {
    label: "Heads",
    description: "I win.",
    checked: true,
  },
  {
    label: "Tails",
    description: "You lose.",
    checked: false,
  },
];

test("renders Selector", () => {
  render(
    <Selector label={label}>
      {options.map((option) => (
        <SelectorOption key={option.label} {...option} />
      ))}
    </Selector>
  );
  const labelElement = screen.getByText(label);
  expect(labelElement).toBeInTheDocument();
  const firstOptionElement = screen.getByLabelText(options[0].label);
  expect(firstOptionElement).toBeInTheDocument();
  expect(firstOptionElement).toBeChecked();
  const firstOptionDescription = screen.getByText(options[0].description);
  expect(firstOptionDescription).toBeInTheDocument();
  const secondOptionElement = screen.getByLabelText(options[1].label);
  expect(secondOptionElement).toBeInTheDocument();
  expect(secondOptionElement).not.toBeChecked();
  const secondOptionDescription = screen.getByText(options[1].description);
  expect(secondOptionDescription).toBeInTheDocument();
});
