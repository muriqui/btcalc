import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ShoulderHitComponent from "./ShoulderHit";

export default {
  title: "Modifiers/Shoulder Hit",
  component: ShoulderHitComponent,
} as ComponentMeta<typeof ShoulderHitComponent>;

const Template: ComponentStory<typeof ShoulderHitComponent> = (args) => (
  <ShoulderHitComponent {...args} />
);

export const ShoulderHit = Template.bind({});
ShoulderHit.args = {
  checked: true,
  disabled: false,
};
