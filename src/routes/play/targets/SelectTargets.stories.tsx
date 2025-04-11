import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { within, expect } from "@storybook/test";
import { default as SelectTargets, clientLoader } from "./SelectTargets";
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
    await canvas.findByText("Select Targets");

    await step("Loaded units are displayed", async () => {
      await expect(canvas.queryByText("Atlas")).toBeInTheDocument();
    });
  },
};

// TODO: Add a story showing units have completed target selection.
// TODO: Error state for no units.
