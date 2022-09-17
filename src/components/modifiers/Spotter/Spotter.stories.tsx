import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SpotterComponent from "./Spotter";

export default {
  title: "Modifiers/Spotter",
  component: SpotterComponent,
} as ComponentMeta<typeof SpotterComponent>;

const Template: ComponentStory<typeof SpotterComponent> = (args) => (
  <SpotterComponent {...args} />
);

export const Spotter = Template.bind({});
Spotter.args = {
  checked: true,
  disabled: false,
};
