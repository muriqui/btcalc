import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";

import OpponentSetup from "./OpponentSetup";

const meta = {
  component: OpponentSetup,
} satisfies Meta<typeof OpponentSetup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const FilledIn: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Add two units", async () => {
      await userEvent.type(canvas.getByLabelText("Opponent name"), "Dire Wolf");
      await userEvent.click(canvas.getByText("Add an opponent"));
      await userEvent.type(
        canvas.getAllByLabelText("Opponent name")[1],
        "Stormcrow",
      );
      await expect(canvas.getByDisplayValue("Dire Wolf")).toBeInTheDocument();
      await expect(canvas.getByDisplayValue("Stormcrow")).toBeInTheDocument();
    });

    await step("Add a third unit", async () => {
      await userEvent.click(canvas.getByText("Add an opponent"));
      await userEvent.type(
        canvas.getAllByLabelText("Opponent name")[2],
        "Summoner",
      );
    });

    await step("Remove the second unit", async () => {
      await userEvent.click(canvas.getAllByText("⊖")[1]);
      await expect(canvas.getByDisplayValue("Dire Wolf")).toBeInTheDocument();
      await expect(
        canvas.queryByDisplayValue("Stormcrow"),
      ).not.toBeInTheDocument();
      await expect(canvas.getByDisplayValue("Summoner")).toBeInTheDocument();
    });
  },
};
