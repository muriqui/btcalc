import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RangeModifierComponent from "./RangeModifier";

export default {
  title: "Calculators/Range Modifier",
  component: RangeModifierComponent,
} as ComponentMeta<typeof RangeModifierComponent>;

const Template: ComponentStory<typeof RangeModifierComponent> = (args) => (
  <RangeModifierComponent {...args} />
);

export const RangeModifier = Template.bind({});
RangeModifier.args = {
  selected: undefined,
};
