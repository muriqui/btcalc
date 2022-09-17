import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeatComponent from "./Heat";

export default {
  title: "Modifiers/Heat",
  component: HeatComponent,
} as ComponentMeta<typeof HeatComponent>;

const Template: ComponentStory<typeof HeatComponent> = (args) => (
  <HeatComponent {...args} />
);

export const Heat = Template.bind({});
Heat.args = {
  selected: "8–12 heat",
  disabled: false,
};
