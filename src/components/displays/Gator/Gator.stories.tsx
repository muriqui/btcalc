import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GatorComponent from "./Gator";

export default {
  title: "Displays/GATOR",
  component: GatorComponent,
} as ComponentMeta<typeof GatorComponent>;

const Template: ComponentStory<typeof GatorComponent> = (args) => (
  <GatorComponent {...args} />
);

export const GATOR = Template.bind({});
GATOR.args = {};
