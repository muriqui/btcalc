import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { within, expect } from "@storybook/test";

import Home from "./Home";
import { Step } from "../types";

const meta = {
  component: Home,
  title: "Routes/Home",
  args: { loaderData: { step: Step.NotStarted } },
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: "/" },
      routing: [
        { path: "/", useStoryElement: true },
        { path: "play", useStoryElement: true },
        { path: `play/${Step.SelectTargets}`, useStoryElement: true },
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
  args: { loaderData: { step: Step.SelectTargets } },
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
