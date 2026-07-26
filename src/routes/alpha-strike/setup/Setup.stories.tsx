import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";

import Setup from "./Setup";
import { System, Step } from "~/types";
import GameplayLayout from "~/layouts/GameplayLayout";

const meta = {
  component: Setup,
  title: "Routes/Alpha Strike/Setup",
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
              useStoryElement: true,
              children: [
                { path: "player/add" },
                { path: "player/:unitId/edit" },
                { path: "player/:unitId/delete" },
                { path: "opponent/add" },
                { path: "opponent/:unitId/edit" },
                { path: "opponent/:unitId/delete" },
              ],
            },
          ],
        },
      ],
    }),
  },
} satisfies Meta<typeof Setup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    loaderData: {
      playerUnits: [],
      opponentUnits: [],
    },
  },
};

export const Filled: Story = {
  args: {
    loaderData: {
      playerUnits: [
        { id: "test-player-1", name: "Atlas", skill: 3, jump: false },
        { id: "test-player-2", name: "Thunderbolt", skill: 2, jump: true },
      ],
      opponentUnits: [
        {
          id: "test-opponent-1",
          name: "Dire Wolf",
          tmm: 1,
          jump: false,
          stl: false,
        },
        {
          id: "test-opponent-2",
          name: "Summoner",
          tmm: 2,
          jump: true,
          stl: false,
        },
      ],
    },
  },
};
