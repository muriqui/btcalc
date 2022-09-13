import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TargetMovementModifierComponent from "./TargetMovementModifier";

export default {
  title: "Calculators/Target Movement Modifier",
  component: TargetMovementModifierComponent,
} as ComponentMeta<typeof TargetMovementModifierComponent>;

const Template: ComponentStory<typeof TargetMovementModifierComponent> = (
  args
) => <TargetMovementModifierComponent {...args} />;

export const TargetMovementModifier = Template.bind({});
TargetMovementModifier.args = {
  selected: undefined,
};
