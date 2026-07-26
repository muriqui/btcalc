import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect, fireEvent } from "@storybook/test";

import AsOpponentUnitForm from "./ASOpponentUnitForm";

const meta = {
  component: AsOpponentUnitForm,
  tags: ["autodocs"],
  args: {
    onCancel: fn(),
    onSave: fn(),
  },
} satisfies Meta<typeof AsOpponentUnitForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Prefilled: Story = {
  args: {
    unit: {
      id: "test-opponent-unit",
      name: "Wasp",
      tmm: 2,
      jump: true,
      jumpTmm: 3,
      stl: true,
    },
  },
};

export const FillIn: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Fill in static fields", async () => {
      await userEvent.type(canvas.getByLabelText("Unit name"), "Wasp");
      await expect(canvas.getByLabelText("Unit name")).toHaveDisplayValue(
        "Wasp",
      );

      await fireEvent.change(
        canvas.getByLabelText("Target movement modifier"),
        {
          target: { value: "2" },
        },
      );
      await expect(
        canvas.getByLabelText("Target movement modifier"),
      ).toHaveDisplayValue("2");

      await userEvent.click(canvas.getByLabelText("Stealth?"));
      await expect(canvas.getByLabelText("Stealth?")).toBeChecked();
    });

    await step("Jump TMM appears when Jump is enabled.", async () => {
      await expect(
        canvas.queryByLabelText("TMM while jumping (if different)"),
      ).not.toBeInTheDocument();

      await userEvent.click(canvas.getByLabelText("Jump-capable?"));
      await expect(canvas.getByLabelText("Jump-capable?")).toBeChecked();
      await expect(
        canvas.getByLabelText("TMM while jumping (if different)"),
      ).toBeInTheDocument();

      await fireEvent.change(
        canvas.getByLabelText("TMM while jumping (if different)"),
        {
          target: { value: "3" },
        },
      );
      await expect(
        canvas.getByLabelText("TMM while jumping (if different)"),
      ).toHaveDisplayValue("3");
    });
  },
};
