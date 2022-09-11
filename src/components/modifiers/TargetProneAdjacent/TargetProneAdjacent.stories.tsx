import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TargetProneAdjacentComponent from "./TargetProneAdjacent";

export default {
  title: "Modifiers/Target Prone Adjacent",
  component: TargetProneAdjacentComponent,
} as ComponentMeta<typeof TargetProneAdjacentComponent>;

const Template: ComponentStory<typeof TargetProneAdjacentComponent> = (
  args
) => <TargetProneAdjacentComponent {...args} />;

export const TargetProneAdjacent = Template.bind({});
TargetProneAdjacent.args = {
  checked: true,
  disabled: false,
};
