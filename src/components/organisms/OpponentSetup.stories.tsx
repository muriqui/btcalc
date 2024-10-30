import type { Meta, StoryObj } from "@storybook/react";

import OpponentSetup from "./OpponentSetup";

const meta = {
  component: OpponentSetup,
  tags: ["autodocs"],
} satisfies Meta<typeof OpponentSetup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {},
};
