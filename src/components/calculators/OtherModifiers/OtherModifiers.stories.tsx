import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import OtherModifiersComponent from "./OtherModifiers";

export default {
  title: "Calculators/Other Modifiers",
  component: OtherModifiersComponent,
} as ComponentMeta<typeof OtherModifiersComponent>;

const Template: ComponentStory<typeof OtherModifiersComponent> = (args) => (
  <OtherModifiersComponent {...args} />
);

export const OtherModifiers = Template.bind({});
OtherModifiers.args = {
  selected: undefined,
};
