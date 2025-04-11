import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect, fireEvent } from "@storybook/test";

import UnitSetup from "./UnitSetup";

const meta = {
  component: UnitSetup,
} satisfies Meta<typeof UnitSetup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const FilledIn: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Add two units", async () => {
      await userEvent.type(canvas.getByLabelText("Unit name"), "Atlas");
      await fireEvent.change(canvas.getByLabelText("Gunnery skill"), {
        target: { value: "2" },
      });
      await userEvent.click(canvas.getByText("Add a unit"));
      await userEvent.type(canvas.getAllByLabelText("Unit name")[1], "Banshee");
      await fireEvent.change(canvas.getAllByLabelText("Gunnery skill")[1], {
        target: { value: "3" },
      });
      await expect(canvas.getByDisplayValue("Atlas")).toBeInTheDocument();
      await expect(canvas.getByDisplayValue("2 (Elite)")).toBeInTheDocument();
      await expect(canvas.getByDisplayValue("Banshee")).toBeInTheDocument();
      await expect(canvas.getByDisplayValue("3 (Veteran)")).toBeInTheDocument();
    });

    await step("Add a third unit", async () => {
      await userEvent.click(canvas.getByText("Add a unit"));
      await userEvent.type(
        canvas.getAllByLabelText("Unit name")[2],
        "Catapult",
      );
    });

    await step("Remove the second unit", async () => {
      await userEvent.click(canvas.getByText("remove Banshee"));
      await expect(canvas.getByDisplayValue("Atlas")).toBeInTheDocument();
      await expect(canvas.getByDisplayValue("2 (Elite)")).toBeInTheDocument();
      await expect(
        canvas.queryByDisplayValue("Banshee"),
      ).not.toBeInTheDocument();
      await expect(
        canvas.queryByDisplayValue("3 (Veteran)"),
      ).not.toBeInTheDocument();
      await expect(canvas.getByDisplayValue("Catapult")).toBeInTheDocument();
      await expect(canvas.getByDisplayValue("4 (Regular)")).toBeInTheDocument();
    });
  },
};
