import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TargetImmobile from "./TargetImmobile";

export default {
  title: "Modifiers/Target Immobile",
  component: TargetImmobile,
} as ComponentMeta<typeof TargetImmobile>;

const Template: ComponentStory<typeof TargetImmobile> = (args) => (
  <TargetImmobile {...args} />
);

export const Default = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
