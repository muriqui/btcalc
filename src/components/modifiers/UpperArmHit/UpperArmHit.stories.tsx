import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import UpperArmHitComponent from "./UpperArmHit";

export default {
  title: "Modifiers/Upper Arm Hit",
  component: UpperArmHitComponent,
} as ComponentMeta<typeof UpperArmHitComponent>;

const Template: ComponentStory<typeof UpperArmHitComponent> = (args) => (
  <UpperArmHitComponent {...args} />
);

export const UpperArmHit = Template.bind({});
UpperArmHit.args = {
  checked: true,
  disabled: false,
};
