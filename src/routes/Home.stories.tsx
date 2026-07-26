import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { within, expect, userEvent } from "@storybook/test";

import Home from "./Home";
import { System, Step } from "~/types";

const meta = {
  component: Home,
  title: "Routes/Home",
  args: { loaderData: { system: undefined, step: undefined } },
  parameters: {
    layout: "fullscreen",
    reactRouter: reactRouterParameters({
      routing: [{ path: "/", useStoryElement: true }],
    }),
  },
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const GameInProgress: Story = {
  args: { loaderData: { system: System.AlphaStrike, step: Step.Combat } },
};

export const StartNewGame: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Modal is not visible at first", async () => {
      await expect(
        canvas.queryByText("Choose which game system to use:"),
      ).not.toBeVisible();
    });

    await step("Clicking the set up button opens the modal", async () => {
      await userEvent.click(canvas.getByText("Set up a new game"));
      await expect(
        canvas.getByText("Choose which game system to use:"),
      ).toBeVisible();
    });
  },
};

export const CancelNewGame: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Click the set up button", async () => {
      await userEvent.click(canvas.getByText("Set up a new game"));
      await expect(
        canvas.getByText("Choose which game system to use:"),
      ).toBeVisible();
    });

    await step("Close the modal", async () => {
      await userEvent.click(canvas.getByText("Close"));
      await expect(
        canvas.queryByText("Choose which game system to use:"),
      ).not.toBeVisible();
    });
  },
};
