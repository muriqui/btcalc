import type { Meta, StoryObj } from "@storybook/react";

import RouteError from "./RouteError";

const meta = {
  component: RouteError,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RouteError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NotFound: Story = {
  args: {
    status: 404,
    statusText: "Not Found",
  },
};

export const Unknown: Story = {
  args: {
    statusText: "Unknown Error",
  },
};
