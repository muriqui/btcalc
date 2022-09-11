import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { formatModifier } from "utils/modifiers";
import ModifierToggle, { ModifierToggleExtensionProps } from "./ModifierToggle";

/**
 * Reusable test suite for components derived from ModifierToggle.
 */
interface commonModifierToggleTestsProps {
  Component: (props: ModifierToggleExtensionProps) => any;
  label: string;
  value: number;
}
export const commonModifierToggleTests = ({
  Component,
  label,
  value,
}: commonModifierToggleTestsProps) => {
  const handleChange = jest.fn();

  describe(`common ModifierToggle tests for ${Component.name}`, () => {
    test(`renders ${Component.name} and toggles on`, async () => {
      render(<Component checked={false} onChange={handleChange} />);
      const buttonElement = screen.getByLabelText(label);
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).not.toBeChecked();
      const valueElement = screen.getByText(formatModifier(value));
      expect(valueElement).toBeInTheDocument();
      await userEvent.click(buttonElement);
      expect(handleChange).toBeCalledWith(label, value);
    });
    test(`toggles ${Component.name} off`, async () => {
      render(<Component checked={true} onChange={handleChange} />);
      const buttonElement = screen.getByLabelText(label);
      expect(buttonElement).toBeChecked();
      await userEvent.click(buttonElement);
      expect(handleChange).toBeCalledWith(label);
    });
    test(`disables ${Component.name}`, () => {
      render(<Component disabled={true} onChange={handleChange} />);
      const buttonElement = screen.getByLabelText(label);
      expect(buttonElement).toHaveAttribute("aria-readonly", "true");
    });
  });
};

/**
 * Tests for ModifierToggle.
 */
const label = "Is this thing on?";
const description = "Tap tap tap";
const value = 2;
const handleChange = jest.fn();

test("renders ModifierToggle and toggles on", async () => {
  render(
    <ModifierToggle
      label={label}
      description={description}
      value={value}
      checked={false}
      onChange={handleChange}
    />
  );
  const buttonElement = screen.getByLabelText(label);
  expect(buttonElement).toBeInTheDocument();
  const descriptionElement = screen.getByText(description);
  expect(descriptionElement).toBeInTheDocument();
  const valueElement = screen.getByText("+2");
  expect(valueElement).toBeInTheDocument();
  await userEvent.click(buttonElement);
  expect(handleChange).toBeCalledWith(label, value);
});

test("toggles ModifierToggle off", async () => {
  render(
    <ModifierToggle
      label={label}
      value={value}
      checked={true}
      onChange={handleChange}
    />
  );
  const buttonElement = screen.getByLabelText(label);
  await userEvent.click(buttonElement);
  expect(handleChange).toBeCalledWith(label);
});

test("disables ModifierToggle", () => {
  render(
    <ModifierToggle
      label={label}
      value={value}
      checked={false}
      disabled={true}
      onChange={handleChange}
    />
  );
  const buttonElement = screen.getByLabelText(label);
  expect(buttonElement).toHaveAttribute("aria-readonly", "true");
});
