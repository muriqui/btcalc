import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TargetJumped from "./TargetJumped";

export default {
  title: "Modifiers/Target Jumped",
  component: TargetJumped,
} as ComponentMeta<typeof TargetJumped>;

const Template: ComponentStory<typeof TargetJumped> = (args) => (
  <TargetJumped {...args} />
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
