import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AttackerMovementModifierComponent from "./AttackerMovementModifier";

export default {
  title: "Calculators/Attacker Movement Modifier",
  component: AttackerMovementModifierComponent,
} as ComponentMeta<typeof AttackerMovementModifierComponent>;

const Template: ComponentStory<typeof AttackerMovementModifierComponent> = (
  args
) => <AttackerMovementModifierComponent {...args} />;

export const AttackerMovementModifier = Template.bind({});
AttackerMovementModifier.args = {
  selected: undefined,
};
