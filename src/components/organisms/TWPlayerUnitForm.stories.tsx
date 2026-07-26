import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect, fireEvent } from "@storybook/test";

import TwPlayerUnitForm from "./TWPlayerUnitForm";

const meta = {
  component: TwPlayerUnitForm,
  tags: ["autodocs"],
  args: {
    onCancel: fn(),
    onSave: fn(),
  },
} satisfies Meta<typeof TwPlayerUnitForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Prefilled: Story = {
  args: {
    unit: {
      id: "test-player-unit",
      name: "Highlander",
      gunnery: 3,
    },
  },
};

export const FillIn: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Fill in static fields", async () => {
      await userEvent.type(canvas.getByLabelText("Unit name"), "Highlander");
      await expect(canvas.getByLabelText("Unit name")).toHaveDisplayValue(
        "Highlander",
      );

      await fireEvent.change(canvas.getByLabelText("Gunnery skill"), {
        target: { value: "3" },
      });
      await expect(canvas.getByLabelText("Gunnery skill")).toHaveDisplayValue(
        "3 (Veteran)",
      );
    });
  },
};
