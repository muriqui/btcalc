import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LabelComponent from "./Label";

export default {
  title: "UI/Label",
  component: LabelComponent,
} as ComponentMeta<typeof LabelComponent>;

const Template: ComponentStory<typeof LabelComponent> = (args) => (
  <LabelComponent {...args} />
);

export const Label = Template.bind({});
Label.args = {
  children: "A label",
  darkBackground: false,
};
