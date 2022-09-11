import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModifierToggle from "./ModifierToggle";

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
  expect(handleChange).toBeCalledWith(true);
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
  expect(handleChange).toBeCalledWith(false);
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
