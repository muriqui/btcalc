import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TargetHexesMoved from "./TargetHexesMoved";

export default {
  title: "Modifiers/Target Hexes Moved",
  component: TargetHexesMoved,
} as ComponentMeta<typeof TargetHexesMoved>;

const Template: ComponentStory<typeof TargetHexesMoved> = (args) => (
  <TargetHexesMoved {...args} />
);

export const Default = Template.bind({});
Default.args = {
  selected: "Moved 3–4 hexes",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
