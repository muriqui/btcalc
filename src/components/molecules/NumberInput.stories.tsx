import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";

import NumberInput from "./NumberInput";

const meta = {
  component: NumberInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Number field",
    min: 0,
    max: 10,
    step: 1,
    placeholder: "0",
  },
};

export const FillIn: Story = {
  ...Default,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Set a value.", async () => {
      await userEvent.type(canvas.getByLabelText("Number field"), "8");
    });
  },
};
