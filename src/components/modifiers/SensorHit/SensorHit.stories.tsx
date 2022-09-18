import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SensorHitComponent from "./SensorHit";

export default {
  title: "Modifiers/Sensor Hit",
  component: SensorHitComponent,
} as ComponentMeta<typeof SensorHitComponent>;

const Template: ComponentStory<typeof SensorHitComponent> = (args) => (
  <SensorHitComponent {...args} />
);

export const SensorHit = Template.bind({});
SensorHit.args = {
  checked: true,
  disabled: false,
};
