import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TargetHexesMovedComponent from "./TargetHexesMoved";

export default {
  title: "Modifiers/Target Hexes Moved",
  component: TargetHexesMovedComponent,
} as ComponentMeta<typeof TargetHexesMovedComponent>;

const Template: ComponentStory<typeof TargetHexesMovedComponent> = (args) => (
  <TargetHexesMovedComponent {...args} />
);

export const TargetHexesMoved = Template.bind({});
TargetHexesMoved.args = {
  selected: "Moved 3–4 hexes",
  disabled: false,
};
