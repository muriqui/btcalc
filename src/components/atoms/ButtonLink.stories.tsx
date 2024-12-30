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

export const Text: Story = {
  args: {
    ...Default.args,
    variant: "text",
  },
};

export const Filled: Story = {
  args: {
    ...Default.args,
    variant: "filled",
  },
};

export const Outlined: Story = {
  args: {
    ...Default.args,
    variant: "outlined",
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    variant: "primary",
  },
};
