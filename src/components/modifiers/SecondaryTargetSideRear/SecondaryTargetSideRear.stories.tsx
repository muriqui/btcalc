import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SecondaryTargetSideRearComponent from "./SecondaryTargetSideRear";

export default {
  title: "Modifiers/Secondary Target Side Rear",
  component: SecondaryTargetSideRearComponent,
} as ComponentMeta<typeof SecondaryTargetSideRearComponent>;

const Template: ComponentStory<typeof SecondaryTargetSideRearComponent> = (
  args
) => <SecondaryTargetSideRearComponent {...args} />;

export const SecondaryTargetSideRear = Template.bind({});
SecondaryTargetSideRear.args = {
  checked: true,
  disabled: false,
};
