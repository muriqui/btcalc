import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { userEvent, within, expect } from "@storybook/test";

import SelectTargets from "./SelectTargets";
import playLoader from "../Play.loader";
import { Step } from "../../../types";
import { setUnits } from "../../../services/utilityService";
import Play from "../Play";

const meta = {
  component: SelectTargets,
  title: "Routes/play/Select Targets",
} satisfies Meta<typeof SelectTargets>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: `/play/${Step.SelectTargets}` },
      routing: [
        {
          path: "play",
          element: <Play />,
          children: [
            {
              path: Step.SelectTargets,
              useStoryElement: true,
              loader: async () => {
                setUnits([{ id: "test-unit-1", name: "Atlas", gunnery: 2 }]);
                return await playLoader();
              },
            },
          ],
        },
        {
          path: `/play/${Step.SelectTargets}/unit/test-unit-1`,
          element: <p>Clicked on a unit</p>,
        },
        {
          path: `/play/${Step.ResolveWeapons}`,
          element: <p>Redirected to ResolveWeapons</p>,
        },
      ],
    }),
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Select Targets");

    await step("Loaded units are displayed", async () => {
      await expect(canvas.queryByText("Atlas")).toBeInTheDocument();
    });
  },
};

export const ClickUnit: Story = {
  parameters: Default.parameters,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Select Targets");

    await step(
      "Clicking a unit takes you to that unit's target options",
      async () => {
        await userEvent.click(canvas.getByText("Atlas"));
        await canvas.findByText("Clicked on a unit");
      },
    );
  },
};

// TODO: Error states for no units or skipped selection on a unit.

export const ClickNextWhenFinished: Story = {
  // TODO: Replace Default.parameters with a data set where targeting has been completed for all units.
  parameters: Default.parameters,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Select Targets");

    await step(
      "Clicking the Next button after all units have selected targets advances to ResolveWeapons",
      async () => {
        await userEvent.click(canvas.getByText("Next: Resolve weapon attacks"));
        await canvas.findByText("Redirected to ResolveWeapons");
      },
    );
  },
};
