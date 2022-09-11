import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toggle from "./Toggle";

const label = "Is this thing on?";
const description = "Tap tap tap";
const handleChange = jest.fn();

test("renders Toggle", () => {
  render(
    <Toggle
      label={label}
      description={description}
      checked={false}
      onChange={handleChange}
    />
  );
  const labelElement = screen.getByText(label);
  expect(labelElement).toBeInTheDocument();
  const buttonElement = screen.getByLabelText(label);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveAttribute("aria-checked", "false");
  const descriptionElement = screen.getByText(description);
  expect(descriptionElement).toBeInTheDocument();
});

test("toggles Toggle on", async () => {
  render(<Toggle label={label} checked={false} onChange={handleChange} />);
  const buttonElement = screen.getByLabelText(label);
  await userEvent.click(buttonElement);
  expect(handleChange).toBeCalledWith(true);
});

test("toggles Toggle off", async () => {
  render(<Toggle label={label} checked={true} onChange={handleChange} />);
  const buttonElement = screen.getByLabelText(label);
  expect(buttonElement).toHaveAttribute("aria-checked", "true");
  await userEvent.click(buttonElement);
  expect(handleChange).toBeCalledWith(false);
});

test("disables ModifierToggle", async () => {
  render(<Toggle label={label} disabled={true} onChange={handleChange} />);
  const buttonElement = screen.getByLabelText(label);
  expect(buttonElement).toHaveAttribute("aria-readonly", "true");
  await userEvent.click(buttonElement);
  expect(handleChange).not.toBeCalled();
});
