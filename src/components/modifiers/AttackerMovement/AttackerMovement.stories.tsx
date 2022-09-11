import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AttackerMovement from "./AttackerMovement";

export default {
  title: "Modifiers/Attacker Movemement",
  component: AttackerMovement,
} as ComponentMeta<typeof AttackerMovement>;

const Template: ComponentStory<typeof AttackerMovement> = (args) => (
  <AttackerMovement {...args} />
);

export const Default = Template.bind({});
Default.args = {
  selected: "Walked",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
