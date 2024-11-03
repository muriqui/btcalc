import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { uuid } from "../../services/utilityService";

import UnitSetup from "./UnitSetup";

const meta = {
  component: UnitSetup,
  tags: ["autodocs"],
  args: { onAddUnit: fn(), onUpdateUnit: fn(), onDeleteUnit: fn() },
} satisfies Meta<typeof UnitSetup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    units: [{ id: uuid(), name: "", gunnery: 4 }],
  },
};

export const FilledIn: Story = {
  args: {
    units: [
      { id: uuid(), name: "Atlas", gunnery: 2 },
      { id: uuid(), name: "Catapult", gunnery: 4 },
    ],
  },
};
