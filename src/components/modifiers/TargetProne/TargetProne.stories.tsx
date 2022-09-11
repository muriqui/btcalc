import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TargetProneComponent from "./TargetProne";

export default {
  title: "Modifiers/Target Prone",
  component: TargetProneComponent,
} as ComponentMeta<typeof TargetProneComponent>;

const Template: ComponentStory<typeof TargetProneComponent> = (args) => (
  <TargetProneComponent {...args} />
);

export const TargetProne = Template.bind({});
TargetProne.args = {
  checked: true,
  disabled: false,
};
