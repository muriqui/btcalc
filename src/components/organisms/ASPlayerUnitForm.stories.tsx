import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect, fireEvent } from "@storybook/test";

import AsPlayerUnitForm from "./ASPlayerUnitForm";

const meta = {
  component: AsPlayerUnitForm,
  tags: ["autodocs"],
  args: {
    onCancel: fn(),
    onSave: fn(),
  },
} satisfies Meta<typeof AsPlayerUnitForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Prefilled: Story = {
  args: {
    unit: {
      id: "test-player-unit",
      name: "Highlander",
      skill: 3,
      jump: true,
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

      await fireEvent.change(canvas.getByLabelText("Skill rating"), {
        target: { value: "3" },
      });
      await expect(canvas.getByLabelText("Skill rating")).toHaveDisplayValue(
        "3 (Veteran)",
      );

      await userEvent.click(canvas.getByLabelText("Jump-capable?"));
      await expect(canvas.getByLabelText("Jump-capable?")).toBeChecked();
    });
  },
};
