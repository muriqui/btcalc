import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SecondaryTargetForwardComponent from "./SecondaryTargetForward";

export default {
  title: "Modifiers/Secondary Target Forward",
  component: SecondaryTargetForwardComponent,
} as ComponentMeta<typeof SecondaryTargetForwardComponent>;

const Template: ComponentStory<typeof SecondaryTargetForwardComponent> = (
  args
) => <SecondaryTargetForwardComponent {...args} />;

export const SecondaryTargetForward = Template.bind({});
SecondaryTargetForward.args = {
  checked: true,
  disabled: false,
};
