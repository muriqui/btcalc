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

export const Text: Story = {
  args: {
    ...Default.args,
    variant: "text",
  },
  decorators: [
    (Story) => (
      <p>
        This is some text surrounding the <Story />. The link should flow with
        the text, but stand out as clickable.
      </p>
    ),
  ],
};

export const SecondaryAction: Story = {
  args: {
    ...Default.args,
    variant: "secondary",
  },
};
