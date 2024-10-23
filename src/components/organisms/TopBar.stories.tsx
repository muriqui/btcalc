import type { Meta, StoryObj } from "@storybook/react";

import TopBar from "./TopBar";

const meta = {
  component: TopBar,
  tags: ["autodocs"],
} satisfies Meta<typeof TopBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
