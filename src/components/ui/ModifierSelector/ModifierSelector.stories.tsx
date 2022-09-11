import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ModifierSelector from "./ModifierSelector";

export default {
  title: "UI/Modifier Selector",
  component: ModifierSelector,
} as ComponentMeta<typeof ModifierSelector>;

const options = [
  {
    label: "Option one",
    description: "An optional description",
    value: 1,
  },
  { label: "Option two", value: 2 },
];

const Template: ComponentStory<typeof ModifierSelector> = (args) => (
  <ModifierSelector {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "A modifier selector",
  options,
  selected: options[0].label,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
