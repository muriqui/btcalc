import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Selector from "./Selector";
import SelectorOption from "./SelectorOption";

export default {
  title: "UI/Selector",
  component: Selector,
} as ComponentMeta<typeof Selector>;

const options = [
  {
    label: "Option one",
    description: "An optional description",
    checked: true,
    value: 1,
  },
  { label: "Option two", checked: false, value: 2 },
];

const Template: ComponentStory<typeof Selector> = (args) => (
  <Selector {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "A selector",
  children: options.map((option) => (
    <SelectorOption key={option.label} {...option} />
  )),
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  children: options.map((option) => (
    <SelectorOption key={option.label} disabled={true} {...option} />
  )),
};
