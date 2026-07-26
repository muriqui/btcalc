import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { within, expect, userEvent } from "@storybook/test";

import PlayerEdit from "./PlayerEdit";
import { System, Step } from "~/types";
import GameplayLayout from "~/layouts/GameplayLayout";
import Setup from "./Setup";

const meta = {
  component: PlayerEdit,
  title: "Routes/Alpha Strike/Setup/Player Edit",
  parameters: {
    layout: "fullscreen",
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { unitId: "test-player-1" },
      },
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
                <Setup
                  loaderData={{
                    playerUnits: [
                      {
                        id: "test-player-1",
                        name: "Atlas",
                        skill: 2,
                        jump: false,
                      },
                    ],
                    opponentUnits: [],
                  }}
                />
              ),
              children: [
                { path: "player/:unitId/edit", useStoryElement: true },
              ],
            },
          ],
        },
      ],
    }),
  },
} satisfies Meta<typeof PlayerEdit>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    loaderData: {
      unit: {
        id: "test-player-1",
        name: "Atlas",
        skill: 2,
        jump: false,
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Modal is not visible at first", async () => {
      await expect(canvas.queryByText("Skill rating")).not.toBeVisible();
    });

    await step("Click the edit player unit button", async () => {
      await userEvent.click(canvas.getByText("edit"));
      await expect(canvas.getByText("Skill rating")).toBeVisible();
    });
  },
};
