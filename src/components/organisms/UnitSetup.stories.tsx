import type { Meta, StoryObj } from "@storybook/react";

import UnitSetup from "./UnitSetup";

const meta = {
  component: UnitSetup,
  tags: ["autodocs"],
} satisfies Meta<typeof UnitSetup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {},
};
