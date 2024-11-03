import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { uuid } from "../../services/utilityService";

import OpponentSetup from "./OpponentSetup";

const meta = {
  component: OpponentSetup,
  tags: ["autodocs"],
  args: { onAddOpponent: fn(), onUpdateOpponent: fn(), onDeleteOpponent: fn() },
} satisfies Meta<typeof OpponentSetup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    opponents: [{ id: uuid(), name: "" }],
  },
};

export const FilledIn: Story = {
  args: {
    opponents: [
      { id: uuid(), name: "Dire Wolf" },
      { id: uuid(), name: "Summoner" },
    ],
  },
};
