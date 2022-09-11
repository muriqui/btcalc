import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AttackerProneComponent from "./AttackerProne";

export default {
  title: "Modifiers/Attacker Prone",
  component: AttackerProneComponent,
} as ComponentMeta<typeof AttackerProneComponent>;

const Template: ComponentStory<typeof AttackerProneComponent> = (args) => (
  <AttackerProneComponent {...args} />
);

export const AttackerProne = Template.bind({});
AttackerProne.args = {
  checked: true,
  disabled: false,
};
