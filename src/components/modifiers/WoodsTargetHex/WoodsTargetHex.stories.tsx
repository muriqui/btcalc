import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import WoodsTargetHexComponent from "./WoodsTargetHex";

export default {
  title: "Modifiers/Woods Target Hex",
  component: WoodsTargetHexComponent,
} as ComponentMeta<typeof WoodsTargetHexComponent>;

const Template: ComponentStory<typeof WoodsTargetHexComponent> = (args) => (
  <WoodsTargetHexComponent {...args} />
);

export const WoodsTargetHex = Template.bind({});
WoodsTargetHex.args = {
  selected: "Target is in light woods",
  disabled: false,
};
