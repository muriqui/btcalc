import type { Meta, StoryObj } from "@storybook/react";
import { System } from "~/types";

import TopBar from "./TopBar";

const meta = {
  component: TopBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof TopBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AlphaStrike: Story = {
  args: {
    system: System.AlphaStrike,
  },
};

export const TotalWarfare: Story = {
  args: {
    system: System.TotalWarfare,
  },
};
