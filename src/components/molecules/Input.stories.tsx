import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta = {
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    label: "Text field",
    type: "text",
    placeholder: "Some placeholder text",
  },
};
