import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ModifierSelectorOption from "./ModifierSelectorOption";

export default {
  title: "UI/Selector/Options/Modifier Selector Option",
  component: ModifierSelectorOption,
} as ComponentMeta<typeof ModifierSelectorOption>;

const Template: ComponentStory<typeof ModifierSelectorOption> = (args) => (
  <ModifierSelectorOption {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "A modifier selector option",
  description: "An optional description",
  value: 2,
  checked: false,
  disabled: false,
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
