import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AttackerMovementComponent from "./AttackerMovement";

export default {
  title: "Modifiers/Attacker Movement",
  component: AttackerMovementComponent,
} as ComponentMeta<typeof AttackerMovementComponent>;

const Template: ComponentStory<typeof AttackerMovementComponent> = (args) => (
  <AttackerMovementComponent {...args} />
);

export const AttackerMovement = Template.bind({});
AttackerMovement.args = {
  selected: "Walked",
  disabled: false,
};
