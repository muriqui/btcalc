import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Result from "./Result";

export default {
  title: "UI/Result",
  component: Result,
} as ComponentMeta<typeof Result>;

const Template: ComponentStory<typeof Result> = (args) => <Result {...args} />;

export const Roll = Template.bind({});
Roll.args = {
  value: 6,
};

export const AutomaticHit = Template.bind({});
AutomaticHit.args = {
  value: 2,
};

export const Impossible = Template.bind({});
Impossible.args = {
  value: Infinity,
};
