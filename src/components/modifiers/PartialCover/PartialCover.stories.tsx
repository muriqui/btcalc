import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PartialCoverComponent from "./PartialCover";

export default {
  title: "Modifiers/Partial Cover",
  component: PartialCoverComponent,
} as ComponentMeta<typeof PartialCoverComponent>;

const Template: ComponentStory<typeof PartialCoverComponent> = (args) => (
  <PartialCoverComponent {...args} />
);

export const PartialCover = Template.bind({});
PartialCover.args = {
  checked: true,
  disabled: false,
};
