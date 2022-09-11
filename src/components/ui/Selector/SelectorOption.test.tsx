import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SelectorOption from "./SelectorOption";

const label = "Is this thing on?";
const description = "Tap tap tap";
const handleChange = jest.fn();

test("renders SelectorOption", () => {
  render(
    <SelectorOption
      label={label}
      description={description}
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
});

test("selects SelectorOption when unchecked", async () => {
  render(
    <SelectorOption label={label} checked={false} onChange={handleChange} />
  );
  const radioElement = screen.getByLabelText(label);
  expect(radioElement).not.toBeChecked();
  await userEvent.click(radioElement);
  expect(handleChange).toBeCalledWith(label);
});

test("selects SelectorOption when checked", async () => {
  render(
    <SelectorOption label={label} checked={true} onChange={handleChange} />
  );
  const radioElement = screen.getByLabelText(label);
  expect(radioElement).toBeChecked();
  await userEvent.click(radioElement);
  expect(handleChange).toBeCalledWith(label);
});

test("disables SelectorOption", async () => {
  render(
    <SelectorOption label={label} disabled={true} onChange={handleChange} />
  );
  const radioElement = screen.getByLabelText(label);
  expect(radioElement).toBeDisabled();
  await userEvent.click(radioElement);
  expect(handleChange).not.toBeCalled();
});
