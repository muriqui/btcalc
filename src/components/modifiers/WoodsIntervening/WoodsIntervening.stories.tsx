import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import WoodsInterveningComponent from "./WoodsIntervening";

export default {
  title: "Modifiers/Woods Intervening",
  component: WoodsInterveningComponent,
} as ComponentMeta<typeof WoodsInterveningComponent>;

const Template: ComponentStory<typeof WoodsInterveningComponent> = (args) => (
  <WoodsInterveningComponent {...args} />
);

export const WoodsIntervening = Template.bind({});
WoodsIntervening.args = {
  lightWoods: 0,
  heavyWoods: 0,
};
