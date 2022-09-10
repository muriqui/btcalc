import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectorOption from "./SelectorOption";

export default {
  title: "UI/Selector/Options/Selector Option",
  component: SelectorOption,
} as ComponentMeta<typeof SelectorOption>;

const Template: ComponentStory<typeof SelectorOption> = (args) => (
  <SelectorOption {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "A selector option",
  description: "An optional description",
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
