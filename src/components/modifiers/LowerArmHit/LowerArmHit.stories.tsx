import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LowerArmHitComponent from "./LowerArmHit";

export default {
  title: "Modifiers/Lower Arm Hit",
  component: LowerArmHitComponent,
} as ComponentMeta<typeof LowerArmHitComponent>;

const Template: ComponentStory<typeof LowerArmHitComponent> = (args) => (
  <LowerArmHitComponent {...args} />
);

export const LowerArmHit = Template.bind({});
LowerArmHit.args = {
  checked: true,
  disabled: false,
};
