import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { within, expect, userEvent } from "@storybook/test";

import PlayerAdd from "./PlayerAdd";
import { System, Step } from "~/types";
import GameplayLayout from "~/layouts/GameplayLayout";
import Setup from "./Setup";

const meta = {
  component: PlayerAdd,
  title: "Routes/Alpha Strike/Setup/Player Add",
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
              children: [{ path: "player/add", useStoryElement: true }],
            },
          ],
        },
      ],
    }),
  },
} satisfies Meta<typeof PlayerAdd>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Modal is not visible at first", async () => {
      await expect(canvas.queryByText("Skill rating")).not.toBeVisible();
    });

    await step("Click the add player unit button", async () => {
      await userEvent.click(canvas.getByText("Add a unit"));
      await expect(canvas.getByText("Skill rating")).toBeVisible();
    });
  },
};
