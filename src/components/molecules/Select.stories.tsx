import type { Meta, StoryObj } from "@storybook/react";

import Select from "./Select";

const meta = {
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dropdown: Story = {
  args: {
    label: "Dropdown select",
    children: (
      <>
        <option>Option One</option>
        <option>Option Two</option>
      </>
    ),
  },
};
