import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { within, expect } from "@storybook/test";

import { default as Home, clientLoader } from "./Home";
import { Step } from "../types";
import { setStep } from "../services/utilityService";

const meta = {
  component: Home,
  title: "Routes/Home",
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: "/" },
      routing: [
        {
          path: "/",
          useStoryElement: true,
          loader: async () => {
            setStep(Step.NotStarted);
            return await clientLoader();
          },
        },
      ],
    }),
  },
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
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: "/" },
      routing: [
        {
          path: "/",
          useStoryElement: true,
          loader: async () => {
            setStep(Step.SelectTargets);
            return await clientLoader();
          },
        },
      ],
    }),
  },
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
