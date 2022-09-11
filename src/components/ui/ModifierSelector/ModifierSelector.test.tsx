import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ModifierSelectorExtensionProps } from "utils/modifiers";
import ModifierSelector, { OptionProps } from "./ModifierSelector";

/**
 * Reusable test suite for components dervied from ModifierSelector.
 */
interface commonModifierSelectorTestsProps {
  Component: (props: ModifierSelectorExtensionProps) => any;
  options: OptionProps[];
}
export const commonModifierSelectorTests = ({
  Component,
  options,
}: commonModifierSelectorTestsProps) => {
  const handleChange = jest.fn();

  describe(`common ModifierSelector tests for ${Component.name}`, () => {
    test(`renders ${Component.name}`, async () => {
      render(<Component selected={options[1].label} onChange={handleChange} />);
      const firstOptionElement = screen.getByLabelText(options[0].label);
      expect(firstOptionElement).toBeInTheDocument();
      expect(firstOptionElement).not.toBeChecked();
      const secondOptionElement = screen.getByLabelText(options[1].label);
      expect(secondOptionElement).toBeInTheDocument();
      expect(secondOptionElement).toBeChecked();
      await userEvent.click(firstOptionElement);
      expect(handleChange).toBeCalledWith(options[0].label, options[0].value);
    });
    test(`disables ${Component.name}`, () => {
      render(<Component disabled={true} />);
      const element = screen.getByLabelText(options[0].label);
      expect(element).toBeChecked();
      expect(element).toBeDisabled();
    });
  });
};

/**
 * Tests for ModifierSelector.
 */
const label = "Heads or tails?";
const options = [
  {
    label: "Heads",
    description: "I win.",
    value: 1,
  },
  {
    label: "Tails",
    description: "You lose.",
    value: 2,
  },
];
const handleChange = jest.fn();

test("renders ModifierSelector", async () => {
  render(
    <ModifierSelector
      label={label}
      options={options}
      selected={options[1].label}
      onChange={handleChange}
    />
  );
  const labelElement = screen.getByText(label);
  expect(labelElement).toBeInTheDocument();
  const firstOptionElement = screen.getByLabelText(options[0].label);
  expect(firstOptionElement).toBeInTheDocument();
  expect(firstOptionElement).not.toBeChecked();
  const firstOptionDescription = screen.getByText(options[0].description);
  expect(firstOptionDescription).toBeInTheDocument();
  const secondOptionElement = screen.getByLabelText(options[1].label);
  expect(secondOptionElement).toBeInTheDocument();
  expect(secondOptionElement).toBeChecked();
  const secondOptionDescription = screen.getByText(options[1].description);
  expect(secondOptionDescription).toBeInTheDocument();
  await userEvent.click(firstOptionElement);
  expect(handleChange).toBeCalledWith(options[0].label, options[0].value);
});

test("disables ModifierSelector", () => {
  render(<ModifierSelector label={label} options={options} disabled={true} />);
  const element = screen.getByLabelText(options[0].label);
  expect(element).toBeChecked();
  expect(element).toBeDisabled();
});
