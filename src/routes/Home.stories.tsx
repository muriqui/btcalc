import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { within, expect, userEvent } from "@storybook/test";

import Home from "./Home";
import { System, Step } from "../types";

const meta = {
  component: Home,
  title: "Routes/Home",
  args: { loaderData: { system: undefined, step: Step.NotStarted } },
  parameters: {
    layout: "fullscreen",
    reactRouter: reactRouterParameters({
      location: { path: "/" },
      routing: [
        { path: "/", useStoryElement: true },
        { path: System.TotalWarfare, useStoryElement: true },
        {
          path: `${System.TotalWarfare}/${Step.Weapons}`,
          useStoryElement: true,
        },
      ],
    }),
  },
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Set up button is present", async () => {
      await canvas.findByText("Set up a new game");
    });

    await step(
      "Continue button is not available when no game is in progress",
      async () => {
        await expect(
          canvas.queryByText("Continue your last game"),
        ).not.toBeInTheDocument();
      },
    );
  },
};

export const GameInProgress: Story = {
  args: { loaderData: { system: System.TotalWarfare, step: Step.Weapons } },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Set up button is present", async () => {
      await canvas.findByText("Set up a new game");
    });

    await step(
      "Continue button is available when a game is in progress",
      async () => {
        await expect(
          canvas.queryByText("Continue your last game"),
        ).toBeInTheDocument();
      },
    );
  },
};

export const StartNewGame: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.queryByText("Choose which game system to use:"),
    ).not.toBeVisible();

    await step("Click the set up button", async () => {
      await userEvent.click(canvas.getByText("Set up a new game"));
      await expect(
        canvas.queryByText("Choose which game system to use:"),
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
        canvas.queryByText("Choose which game system to use:"),
      ).toBeVisible();
    });

    await step("Close the modal", async () => {
      await userEvent.click(canvas.getByText("x"));
      await expect(
        canvas.queryByText("Choose which game system to use:"),
      ).not.toBeVisible();
    });
  },
};
