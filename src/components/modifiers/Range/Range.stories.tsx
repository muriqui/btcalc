import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RangeComponent from "./Range";

export default {
  title: "Modifiers/Range",
  component: RangeComponent,
} as ComponentMeta<typeof RangeComponent>;

const Template: ComponentStory<typeof RangeComponent> = (args) => (
  <RangeComponent {...args} />
);

export const Range = Template.bind({});
Range.args = {
  selected: "Medium",
  disabled: false,
};
