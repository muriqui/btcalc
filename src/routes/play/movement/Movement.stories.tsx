import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { userEvent, within, expect } from "@storybook/test";

import Movement from "./Movement";
import playLoader from "../Play.loader";
import { Step } from "../../../types";
import { setOpponents, setUnits } from "../../../services/utilityService";
import Play from "../Play";

const meta = {
  component: Movement,
  title: "Routes/play/Movement",
} satisfies Meta<typeof Movement>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: `/play/${Step.Movement}` },
      routing: [
        {
          path: "play",
          element: <Play />,
          children: [
            {
              path: Step.Movement,
              useStoryElement: true,
              loader: async () => {
                setUnits([{ id: "test-unit-1", name: "Atlas", gunnery: 2 }]);
                setOpponents([{ id: "test-opp-1", name: "Dire Wolf" }]);
                return await playLoader();
              },
            },
          ],
        },
        {
          path: `/play/${Step.Movement}/unit/test-unit-1`,
          element: <p>Clicked on a unit</p>,
        },
        {
          path: `/play/${Step.Movement}/opponent/test-opp-1`,
          element: <p>Clicked on an opponent</p>,
        },
        {
          path: `/play/${Step.SelectTargets}`,
          element: <p>Redirected to SelectTargets</p>,
        },
      ],
    }),
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Movement");

    await step("Loaded units and opponents are displayed", async () => {
      await expect(canvas.queryByText("Atlas")).toBeInTheDocument();
      await expect(canvas.queryByText("Dire Wolf")).toBeInTheDocument();
    });
  },
};

export const ClickUnit: Story = {
  parameters: Default.parameters,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Movement");

    await step(
      "Clicking a unit takes you to that unit's movement options",
      async () => {
        await userEvent.click(canvas.getByText("Atlas"));
        await canvas.findByText("Clicked on a unit");
      },
    );
  },
};

export const ClickOpponent: Story = {
  parameters: Default.parameters,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Movement");

    await step(
      "Clicking an opponent takes you to the opponent's movement options",
      async () => {
        await userEvent.click(canvas.getByText("Dire Wolf"));
        await canvas.findByText("Clicked on an opponent");
      },
    );
  },
};

// TODO: Error states for no units, no opponents, or skipped movement on a unit.

export const ClickNextWhenFinished: Story = {
  // TODO: Replace Default.parameters with a data set where movement has been completed for all units.
  parameters: Default.parameters,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Movement");

    await step(
      "Clicking the Next button after all units have moved advances to SelectTargets",
      async () => {
        await userEvent.click(canvas.getByText("Next: Select targets"));
        await canvas.findByText("Redirected to SelectTargets");
      },
    );
  },
};
