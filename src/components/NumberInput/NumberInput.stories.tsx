import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NumberInputComponent from "./NumberInput";

export default {
  title: "UI/Number Input",
  component: NumberInputComponent,
} as ComponentMeta<typeof NumberInputComponent>;

const Template: ComponentStory<typeof NumberInputComponent> = (args) => (
  <NumberInputComponent {...args} />
);

export const NumberInput = Template.bind({});
NumberInput.args = {
  label: "Number input",
  value: 0,
  min: 0,
  max: 10,
};
