import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { within, expect } from "@storybook/test";

import { default as Movement, clientLoader } from "./Movement";
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
                return await clientLoader();
              },
            },
          ],
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

// TODO: Add a story showing units and opponents have completed movement.
// TODO: Error states for no units or no opponents.
