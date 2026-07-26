import type { Meta, StoryObj } from "@storybook/react";

import AsOpponentUnit from "./ASOpponentUnit";

const meta = {
  component: AsOpponentUnit,
  tags: ["autodocs"],
} satisfies Meta<typeof AsOpponentUnit>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    unit: {
      id: "test-opponent-unit",
      name: "Wasp",
      tmm: 2,
      jump: true,
      jumpTmm: 3,
      stl: true,
    },
    headingLevel: 3,
  },
};

export const TogglesOff: Story = {
  args: {
    unit: {
      ...Default.args.unit,
      jump: false,
      jumpTmm: NaN,
      stl: false,
    },
    headingLevel: 3,
  },
};
