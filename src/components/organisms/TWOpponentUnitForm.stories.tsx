import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect } from "@storybook/test";

import TwOpponentUnitForm from "./TWOpponentUnitForm";

const meta = {
  component: TwOpponentUnitForm,
  tags: ["autodocs"],
  args: {
    onCancel: fn(),
    onSave: fn(),
  },
} satisfies Meta<typeof TwOpponentUnitForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Prefilled: Story = {
  args: {
    unit: {
      id: "test-opponent-unit",
      name: "Wasp",
    },
  },
};

export const FillIn: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Fill in name", async () => {
      await userEvent.type(canvas.getByLabelText("Unit name"), "Wasp");
      await expect(canvas.getByLabelText("Unit name")).toHaveDisplayValue(
        "Wasp",
      );
    });
  },
};
