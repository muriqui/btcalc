import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IndirectFireComponent from "./IndirectFire";

export default {
  title: "Modifiers/Indirect Fire",
  component: IndirectFireComponent,
} as ComponentMeta<typeof IndirectFireComponent>;

const Template: ComponentStory<typeof IndirectFireComponent> = (args) => (
  <IndirectFireComponent {...args} />
);

export const IndirectFire = Template.bind({});
IndirectFire.args = {
  checked: true,
  disabled: false,
};
