import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { userEvent, within, expect } from "@storybook/test";

import Home from "./Home";
import homeLoader from "./Home.loader";
import { Step } from "../../types";
import { setStep } from "../../services/utilityService";
import Root from "../Root";

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
          element: <Root />,
          children: [
            {
              index: true,
              useStoryElement: true,
              loader: async () => {
                setStep(Step.NotStarted);
                return await homeLoader();
              },
            },
          ],
        },
        {
          path: "play",
          element: <p>Redirected to Setup</p>,
        },
      ],
    }),
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Set up button is present after page load", async () => {
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

export const ClickNewGame: Story = {
  parameters: Default.parameters,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Set up a new game");

    await step("Clicking the set up button redirects to Setup", async () => {
      await userEvent.click(canvas.getByText("Set up a new game"));
      await canvas.findByText("Redirected to Setup");
    });
  },
};

export const GameInProgress: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: "/" },
      routing: [
        {
          path: "/",
          element: <Root />,
          children: [
            {
              index: true,
              useStoryElement: true,
              loader: async () => {
                setStep(Step.SelectTargets);
                return await homeLoader();
              },
            },
          ],
        },
        {
          path: `play/${Step.SelectTargets}`,
          element: <p>Redirected to current step of in-progress game</p>,
        },
      ],
    }),
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Set up a new game");

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

export const ClickContinueGame: Story = {
  parameters: GameInProgress.parameters,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Set up a new game");

    await step(
      "Clicking the continue button redirects to the current step of the in-progress game",
      async () => {
        await userEvent.click(canvas.getByText("Continue your last game"));
        await canvas.findByText(
          "Redirected to current step of in-progress game",
        );
      },
    );
  },
};
