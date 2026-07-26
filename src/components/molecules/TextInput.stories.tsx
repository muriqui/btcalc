import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";

import TextInput from "./TextInput";

const meta = {
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Text field",
    placeholder: "Some placeholder text",
  },
};

export const FillIn: Story = {
  ...Default,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Type in the field.", async () => {
      await userEvent.type(
        canvas.getByLabelText("Text field"),
        "Some text value",
      );
    });
  },
};
