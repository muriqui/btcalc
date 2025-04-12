import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { within, expect } from "@storybook/test";

import SelectTargets from "./SelectTargets";
import { Step } from "../../../types";
import Play from "../Play";

const route = {
  element: <Play />,
  children: [{ path: Step.SelectTargets, useStoryElement: true }],
};

const meta = {
  component: SelectTargets,
  title: "Routes/play/Select Targets",
  args: {
    loaderData: {
      units: [{ id: "test-unit-1", name: "Atlas", gunnery: 2 }],
    },
  },
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: `/play/${Step.SelectTargets}` },
      routing: [
        { path: "play", ...route },
        { path: "/", ...route },
        { path: `play/${Step.ResolveWeapons}`, ...route },
        { path: `play/${Step.SelectTargets}/unit/:id`, ...route },
      ],
    }),
  },
} satisfies Meta<typeof SelectTargets>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Select Targets");

    await step("Loaded units are displayed", async () => {
      await expect(canvas.queryByText("Atlas")).toBeInTheDocument();
    });
  },
};

// TODO: Add a story showing units have completed target selection.
// TODO: Error state for no units.
