import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AttackerProne from "./AttackerProne";

export default {
  title: "Modifiers/Attacker Prone",
  component: AttackerProne,
} as ComponentMeta<typeof AttackerProne>;

const Template: ComponentStory<typeof AttackerProne> = (args) => (
  <AttackerProne {...args} />
);

export const Default = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
