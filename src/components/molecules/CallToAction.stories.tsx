import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import CallToAction from "./CallToAction";

const meta = {
  component: CallToAction,
  tags: ["autodocs"],
  args: { primaryOnClick: fn() },
} satisfies Meta<typeof CallToAction>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    heading: "Some heading text",
    primaryText: "Primary action",
    primaryTo: "/",
  },
};

export const Complex: Story = {
  args: {
    ...Basic.args,
    heading: "Some heading text long enough to potentially wrap",
    secondaryText: "A secondary action",
    secondaryTo: "/",
    eyebrow: "Some eyebrow text",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia laoreet purus in accumsan. Fusce eget justo sit amet ligula cursus pulvinar.",
  },
};

export const LeftAligned: Story = {
  args: {
    ...Complex.args,
    align: "left",
  },
};
