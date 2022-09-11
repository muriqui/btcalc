import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TargetImmobileComponent from "./TargetImmobile";

export default {
  title: "Modifiers/Target Immobile",
  component: TargetImmobileComponent,
} as ComponentMeta<typeof TargetImmobileComponent>;

const Template: ComponentStory<typeof TargetImmobileComponent> = (args) => (
  <TargetImmobileComponent {...args} />
);

export const TargetImmobile = Template.bind({});
TargetImmobile.args = {
  checked: true,
  disabled: false,
};
