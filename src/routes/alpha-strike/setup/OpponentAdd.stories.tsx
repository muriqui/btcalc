import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { within, expect, userEvent } from "@storybook/test";

import OpponentAdd from "./OpponentAdd";
import { System, Step } from "~/types";
import GameplayLayout from "~/layouts/GameplayLayout";
import Setup from "./Setup";

const meta = {
  component: OpponentAdd,
  title: "Routes/Alpha Strike/Setup/Opponent Add",
  parameters: {
    layout: "fullscreen",
    reactRouter: reactRouterParameters({
      routing: [
        {
          path: System.AlphaStrike,
          element: (
            <GameplayLayout loaderData={{ system: System.AlphaStrike }} />
          ),
          children: [
            {
              path: Step.Setup,
              element: (
                <Setup loaderData={{ playerUnits: [], opponentUnits: [] }} />
              ),
              children: [{ path: "opponent/add", useStoryElement: true }],
            },
          ],
        },
      ],
    }),
  },
} satisfies Meta<typeof OpponentAdd>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Modal is not visible at first", async () => {
      await expect(
        canvas.queryByText("Target movement modifier"),
      ).not.toBeVisible();
    });

    await step("Click the add opponent unit button", async () => {
      await userEvent.click(canvas.getByText("Add an opponent"));
      await expect(canvas.getByText("Target movement modifier")).toBeVisible();
    });
  },
};
