import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TargetJumpedComponent from "./TargetJumped";

export default {
  title: "Modifiers/Target Jumped",
  component: TargetJumpedComponent,
} as ComponentMeta<typeof TargetJumpedComponent>;

const Template: ComponentStory<typeof TargetJumpedComponent> = (args) => (
  <TargetJumpedComponent {...args} />
);

export const TargetJumped = Template.bind({});
TargetJumped.args = {
  checked: true,
  disabled: false,
};
