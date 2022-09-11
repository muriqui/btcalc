import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TargetRangeComponent from "./TargetRange";

export default {
  title: "Modifiers/Target Range",
  component: TargetRangeComponent,
} as ComponentMeta<typeof TargetRangeComponent>;

const Template: ComponentStory<typeof TargetRangeComponent> = (args) => (
  <TargetRangeComponent {...args} />
);

export const TargetRange = Template.bind({});
TargetRange.args = {
  selected: "Medium",
  disabled: false,
};
