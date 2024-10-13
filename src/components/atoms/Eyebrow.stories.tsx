import type { Meta, StoryObj } from "@storybook/react";

import Eyebrow from "./Eyebrow";

const meta = {
  component: Eyebrow,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Eyebrow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Some example eyebrow text",
  },
};
