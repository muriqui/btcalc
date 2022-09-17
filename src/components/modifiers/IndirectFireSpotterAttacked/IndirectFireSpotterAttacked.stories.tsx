import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IndirectFireSpotterAttackedComponent from "./IndirectFireSpotterAttacked";

export default {
  title: "Modifiers/Indirect Fire Spotter Attacked",
  component: IndirectFireSpotterAttackedComponent,
} as ComponentMeta<typeof IndirectFireSpotterAttackedComponent>;

const Template: ComponentStory<typeof IndirectFireSpotterAttackedComponent> = (
  args
) => <IndirectFireSpotterAttackedComponent {...args} />;

export const IndirectFireSpotterAttacked = Template.bind({});
IndirectFireSpotterAttacked.args = {
  checked: true,
  disabled: false,
};
