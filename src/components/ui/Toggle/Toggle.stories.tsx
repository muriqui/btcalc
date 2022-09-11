import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Toggle from "./Toggle";

export default {
  title: "UI/Toggle",
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Toggle switch",
  description: "Optional description",
  checked: false,
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  ...Default.args,
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
