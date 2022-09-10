import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ModifierToggle from "./ModifierToggle";

export default {
  title: "UI/Modifier Toggle",
  component: ModifierToggle,
} as ComponentMeta<typeof ModifierToggle>;

const Template: ComponentStory<typeof ModifierToggle> = (args) => (
  <ModifierToggle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Modifier toggle switch",
  description: "Optional description",
  value: 1,
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
