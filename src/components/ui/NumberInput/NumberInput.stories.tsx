import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NumberInput from "./NumberInput";

export default {
  title: "UI/Number Input",
  component: NumberInput,
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = (args) => (
  <NumberInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Number input",
  value: 0,
  min: 0,
  max: 10,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
