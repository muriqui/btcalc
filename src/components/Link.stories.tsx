import type { Meta, StoryObj } from "@storybook/react";

import Link from "./Link";

const meta = {
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    to: "/",
    children: "Link text",
  },
};

export const Small: Story = {
  args: {
    className: "text-sm",
    ...Default.args,
  },
};
