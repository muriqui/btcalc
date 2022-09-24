import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modifier from "./Modifier";

export default {
  title: "UI/Modifier",
  component: Modifier,
} as ComponentMeta<typeof Modifier>;

const Template: ComponentStory<typeof Modifier> = (args) => (
  <Modifier {...args} />
);

export const NormalValue = Template.bind({});
NormalValue.args = {
  value: 2,
  hidden: false,
};

export const Impossible = Template.bind({});
Impossible.args = {
  ...NormalValue.args,
  value: Infinity,
};
