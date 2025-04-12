import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { within, expect } from "@storybook/test";

import Movement from "./Movement";
import { Step } from "../../../types";
import Play from "../Play";

const route = {
  element: <Play />,
  children: [{ path: Step.Movement, useStoryElement: true }],
};

const meta = {
  component: Movement,
  title: "Routes/play/Movement",
  args: {
    loaderData: {
      units: [{ id: "test-unit-1", name: "Atlas", gunnery: 2 }],
      opponents: [{ id: "test-opp-1", name: "Dire Wolf" }],
    },
  },
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: `/play/${Step.Movement}` },
      routing: [
        { path: "play", ...route },
        { path: "/", ...route },
        { path: `play/${Step.SelectTargets}`, ...route },
        { path: `play/${Step.Movement}/unit/:id`, ...route },
        { path: `play/${Step.Movement}/opponent/:id`, ...route },
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
