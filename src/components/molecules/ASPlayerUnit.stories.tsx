import type { Meta, StoryObj } from "@storybook/react";

import AsPlayerUnit from "./ASPlayerUnit";

const meta = {
  component: AsPlayerUnit,
  tags: ["autodocs"],
} satisfies Meta<typeof AsPlayerUnit>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    unit: {
      id: "test-player-unit",
      name: "Highlander",
      skill: 3,
      jump: true,
    },
    headingLevel: 3,
  },
};

export const TogglesOff: Story = {
  args: {
    unit: {
      ...Default.args.unit,
      jump: false,
    },
    headingLevel: 3,
  },
};
