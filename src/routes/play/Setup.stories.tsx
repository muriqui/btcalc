import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";

import Setup from "./Setup";
import Play from "./Play";
import { FilledIn as UnitFilledIn } from "~/components/organisms/UnitSetup.stories";
import { FilledIn as OpponentFilledIn } from "~/components/organisms/OpponentSetup.stories";

const route = {
  element: <Play />,
  children: [{ index: true, useStoryElement: true, action: () => undefined }],
};

const meta = {
  component: Setup,
  title: "Routes/play/Setup",
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: "/play" },
      routing: [
        { path: "play", ...route },
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
