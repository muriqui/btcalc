import type { Meta, StoryObj } from "@storybook/react";

import ButtonLink from "./ButtonLink";

const meta = {
  component: ButtonLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    to: "/",
    children: "Button label",
  },
};

export const Small: Story = {
  args: {
    className: "text-sm",
    ...Default.args,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
};
