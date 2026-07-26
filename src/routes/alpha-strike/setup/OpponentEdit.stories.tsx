import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { within, expect, userEvent } from "@storybook/test";

import OpponentEdit from "./OpponentEdit";
import { System, Step } from "~/types";
import GameplayLayout from "~/layouts/GameplayLayout";
import Setup from "./Setup";

const meta = {
  component: OpponentEdit,
  title: "Routes/Alpha Strike/Setup/Opponent Edit",
  parameters: {
    layout: "fullscreen",
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { unitId: "test-opponent-1" },
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
                    playerUnits: [],
                    opponentUnits: [
                      {
                        id: "test-opponent-1",
                        name: "Dire Wolf",
                        tmm: 1,
                        jump: false,
                        stl: false,
                      },
                    ],
                  }}
                />
              ),
              children: [
                { path: "opponent/:unitId/edit", useStoryElement: true },
              ],
            },
          ],
        },
      ],
    }),
  },
} satisfies Meta<typeof OpponentEdit>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    loaderData: {
      unit: {
        id: "test-opponent-1",
        name: "Dire Wolf",
        tmm: 1,
        jump: false,
        stl: false,
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Modal is not visible at first", async () => {
      await expect(
        canvas.queryByText("Target movement modifier"),
      ).not.toBeVisible();
    });

    await step("Click the edit opponent unit button", async () => {
      await userEvent.click(canvas.getByText("edit"));
      await expect(canvas.getByText("Target movement modifier")).toBeVisible();
    });
  },
};
