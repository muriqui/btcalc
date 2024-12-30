import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "./Button";

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button label",
  },
};

export const Text: Story = {
  args: {
    ...Default.args,
    variant: "text",
  },
};

export const TextDisabled: Story = {
  args: {
    ...Text.args,
    disabled: true,
  },
};

export const Filled: Story = {
  args: {
    ...Default.args,
    variant: "filled",
  },
};

export const FilledDisabled: Story = {
  args: {
    ...Filled.args,
    disabled: true,
  },
};

export const Outlined: Story = {
  args: {
    ...Default.args,
    variant: "outlined",
  },
};

export const OutlinedDisabled: Story = {
  args: {
    ...Outlined.args,
    disabled: true,
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    variant: "primary",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};
