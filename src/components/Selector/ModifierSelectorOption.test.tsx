import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModifierSelectorOption from "./ModifierSelectorOption";

const label = "Is this thing on?";
const description = "Tap tap tap";
const value = 2;
const handleChange = jest.fn();

test("renders ModifierSelectorOption", () => {
  render(
    <ModifierSelectorOption
      label={label}
      description={description}
      value={value}
      onChange={handleChange}
    />
  );
  const labelElement = screen.getByText(label);
  expect(labelElement).toBeInTheDocument();
  const radioElement = screen.getByLabelText(label);
  expect(radioElement).toBeInTheDocument();
  expect(radioElement).not.toBeChecked();
  expect(radioElement).not.toBeDisabled();
  const descriptionElement = screen.getByText(description);
  expect(descriptionElement).toBeInTheDocument();
  const modifierElement = screen.getByText("+2");
  expect(modifierElement).toBeInTheDocument();
});

test("selects ModifierSelectorOption when unchecked", async () => {
  render(
    <ModifierSelectorOption
      label={label}
      value={value}
      checked={false}
      onChange={handleChange}
    />
  );
  const radioElement = screen.getByLabelText(label);
  expect(radioElement).not.toBeChecked();
  await userEvent.click(radioElement);
  expect(handleChange).toBeCalledWith(label, value);
});

test("selects ModifierSelectorOption when checked", async () => {
  render(
    <ModifierSelectorOption
      label={label}
      value={value}
      checked={true}
      onChange={handleChange}
    />
  );
  const radioElement = screen.getByLabelText(label);
  expect(radioElement).toBeChecked();
  await userEvent.click(radioElement);
  expect(handleChange).toBeCalledWith(label, value);
});

test("disables ModifierSelectorOption", async () => {
  render(
    <ModifierSelectorOption
      label={label}
      value={value}
      disabled={true}
      onChange={handleChange}
    />
  );
  const radioElement = screen.getByLabelText(label);
  expect(radioElement).toBeDisabled();
  await userEvent.click(radioElement);
  expect(handleChange).not.toBeCalled();
});
