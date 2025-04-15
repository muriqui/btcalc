import type { Meta, StoryObj } from "@storybook/react";

import GameContainer from "./GameContainer";

const meta = {
  component: GameContainer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof GameContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Game content goes here.</p>,
  },
};
