import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { System } from "~/types";

import Setup from "./Setup";
import GameplayLayout from "~/layouts/GameplayLayout";
import { FilledIn as UnitFilledIn } from "~/components/organisms/UnitSetup.stories";
import { FilledIn as OpponentFilledIn } from "~/components/organisms/OpponentSetup.stories";

const loaderData = {
  system: System.TotalWarfare,
};

const route = {
  element: <GameplayLayout loaderData={loaderData} />,
  children: [{ index: true, useStoryElement: true, action: () => undefined }],
};

const meta = {
  component: Setup,
  title: "Routes/Total Warfare/Setup",
  parameters: {
    layout: "fullscreen",
    reactRouter: reactRouterParameters({
      location: { path: `/${System.TotalWarfare}` },
      routing: [
        { path: System.TotalWarfare, ...route },
        { path: "/", ...route },
      ],
    }),
  },
} satisfies Meta<typeof Setup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FilledIn: Story = {
  play: async (args) => {
    if (!UnitFilledIn.play || !OpponentFilledIn.play) {
      throw new Error("Missing play functions for child elements.");
    }
    await UnitFilledIn.play(args);
    await OpponentFilledIn.play(args);
  },
};

export const ValidationError: Story = {
  args: {
    actionData: {
      error: "Sample error: The form submission failed validation.",
    },
  },
};
