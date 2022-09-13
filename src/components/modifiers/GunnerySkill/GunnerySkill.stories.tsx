import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GunnerySkillComponent from "./GunnerySkill";

export default {
  title: "Modifiers/Gunnery Skill",
  component: GunnerySkillComponent,
} as ComponentMeta<typeof GunnerySkillComponent>;

const Template: ComponentStory<typeof GunnerySkillComponent> = (args) => (
  <GunnerySkillComponent {...args} />
);

export const GunnerySkill = Template.bind({});
GunnerySkill.args = {
  value: 4,
  disabled: false,
};
