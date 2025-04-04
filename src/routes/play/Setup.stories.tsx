import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { userEvent, within } from "@storybook/test";

import { default as Setup, clientAction } from "./Setup";
import { Step } from "../../types";
import Play from "./Play";

const meta = {
  component: Setup,
  title: "Routes/play/Setup",
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: "/play" },
      routing: [
        {
          path: "play",
          element: <Play />,
          children: [
            { index: true, useStoryElement: true, action: clientAction },
          ],
        },
        {
          path: `/play/${Step.Movement}`,
          element: <p>Redirected to Movement</p>,
        },
      ],
    }),
  },
} satisfies Meta<typeof Setup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const UnnamedUnit: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step(
      "Fill in only the opponent's unit and try to start the game",
      async () => {
        await userEvent.type(
          canvas.getByLabelText("Opponent name"),
          "Dire Wolf",
        );
        await userEvent.click(canvas.getByText("Start game"));
      },
    );

    await step("Error message is displayed", async () => {
      await canvas.findByText("Each team must have at least one named unit.");
    });
  },
};

export const UnnamedOpponent: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step(
      "Fill in only the player's unit and try to start the game",
      async () => {
        await userEvent.type(canvas.getByLabelText("Unit name"), "Atlas");
        await userEvent.click(canvas.getByText("Start game"));
      },
    );

    await step("Error message is displayed", async () => {
      await canvas.findByText("Each team must have at least one named unit.");
    });
  },
};

export const FilledInAndSubmitted: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Fill in both fields and start the game", async () => {
      await userEvent.type(canvas.getByLabelText("Unit name"), "Atlas");
      await userEvent.type(canvas.getByLabelText("Opponent name"), "Dire Wolf");
      await userEvent.click(canvas.getByText("Start game"));
    });

    await step(
      "Clicking the start button redirects to the movement phase of a new game",
      async () => {
        await canvas.findByText("Redirected to Movement");
      },
    );
  },
};
