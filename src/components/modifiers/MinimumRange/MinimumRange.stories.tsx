import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MinimumRangeComponent from "./MinimumRange";

export default {
  title: "Modifiers/Minimum Range",
  component: MinimumRangeComponent,
} as ComponentMeta<typeof MinimumRangeComponent>;

const Template: ComponentStory<typeof MinimumRangeComponent> = (args) => (
  <MinimumRangeComponent {...args} />
);

export const MinimumRange = Template.bind({});
MinimumRange.args = {
  checked: true,
  minimumRange: 2,
  targetRange: 1,
};
