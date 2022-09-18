import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SensorHitSecondComponent from "./SensorHitSecond";

export default {
  title: "Modifiers/Sensor Hit Second",
  component: SensorHitSecondComponent,
} as ComponentMeta<typeof SensorHitSecondComponent>;

const Template: ComponentStory<typeof SensorHitSecondComponent> = (args) => (
  <SensorHitSecondComponent {...args} />
);

export const SensorHitSecond = Template.bind({});
SensorHitSecond.args = {
  checked: true,
  disabled: false,
};
