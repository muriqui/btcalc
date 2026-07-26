import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { within, expect } from "@storybook/test";

import Weapons from "./Weapons";
import GameplayLayout from "~/layouts/GameplayLayout";
import { System, Step } from "../../types";

const loaderData = {
  system: System.TotalWarfare,
};

const route = {
  element: <GameplayLayout loaderData={loaderData} />,
  children: [{ path: Step.Weapons, useStoryElement: true }],
};

const meta = {
  component: Weapons,
  title: "Routes/Total Warfare/Weapon Attacks",
  args: {
    loaderData: {
      units: [{ id: "test-unit-1", name: "Atlas", gunnery: 2 }],
    },
  },
  parameters: {
    layout: "fullscreen",
    reactRouter: reactRouterParameters({
      location: { path: `/${System.TotalWarfare}/${Step.Weapons}` },
      routing: [
        { path: System.TotalWarfare, ...route },
        { path: "/", ...route },
        { path: `${System.TotalWarfare}/${Step.Physical}`, ...route },
        { path: `${System.TotalWarfare}/${Step.Weapons}/unit/:id`, ...route },
      ],
    }),
  },
} satisfies Meta<typeof Weapons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Weapon Attacks");

    await step("Loaded units are displayed", async () => {
      await expect(canvas.queryByText("Atlas")).toBeInTheDocument();
    });
  },
};

// TODO: Add a story showing units have completed target selection.
// TODO: Error state for no units.
