import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { within, expect } from "@storybook/test";

import Movement from "./Movement";
import { System, Step } from "../../types";
import TotalWarfare from "./TotalWarfare";

const route = {
  element: <TotalWarfare />,
  children: [{ path: Step.Movement, useStoryElement: true }],
};

const meta = {
  component: Movement,
  title: "Routes/Total Warfare/Movement",
  args: {
    loaderData: {
      units: [{ id: "test-unit-1", name: "Atlas", gunnery: 2 }],
      opponents: [{ id: "test-opp-1", name: "Dire Wolf" }],
    },
  },
  parameters: {
    layout: "fullscreen",
    reactRouter: reactRouterParameters({
      location: { path: `/${System.TotalWarfare}/${Step.Movement}` },
      routing: [
        { path: System.TotalWarfare, ...route },
        { path: "/", ...route },
        { path: `${System.TotalWarfare}/${Step.Weapons}`, ...route },
        { path: `${System.TotalWarfare}/${Step.Movement}/unit/:id`, ...route },
        {
          path: `${System.TotalWarfare}/${Step.Movement}/opponent/:id`,
          ...route,
        },
      ],
    }),
  },
} satisfies Meta<typeof Movement>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Movement");

    await step("Loaded units and opponents are displayed", async () => {
      await expect(canvas.queryByText("Atlas")).toBeInTheDocument();
      await expect(canvas.queryByText("Dire Wolf")).toBeInTheDocument();
    });
  },
};

// TODO: Add a story showing units and opponents have completed movement.
// TODO: Error states for no units or no opponents.
