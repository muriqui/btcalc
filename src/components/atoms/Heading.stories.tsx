import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./Heading";

const meta = {
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    level: 1,
    children: "Heading text",
  },
};

export const Heading2: Story = {
  args: {
    ...Heading1.args,
    level: 2,
  },
};

export const Heading3: Story = {
  args: {
    ...Heading1.args,
    level: 3,
  },
};

export const Heading4: Story = {
  args: {
    ...Heading1.args,
    level: 4,
  },
};

export const Heading5: Story = {
  args: {
    ...Heading1.args,
    level: 5,
  },
};

export const Heading6: Story = {
  args: {
    ...Heading1.args,
    level: 6,
  },
};
