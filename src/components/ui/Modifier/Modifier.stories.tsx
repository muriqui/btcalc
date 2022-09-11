import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ModifierComponent from "./Modifier";

export default {
  title: "UI/Modifier",
  component: ModifierComponent,
} as ComponentMeta<typeof ModifierComponent>;

const Template: ComponentStory<typeof ModifierComponent> = (args) => (
  <ModifierComponent {...args} />
);

export const Modifier = Template.bind({});
Modifier.args = {
  value: 2,
  hidden: false,
  darkBackground: false,
};
