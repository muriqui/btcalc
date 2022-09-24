import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TopBarComponent from "./TopBar";

export default {
  title: "UI/Top Bar",
  component: TopBarComponent,
} as ComponentMeta<typeof TopBarComponent>;

const Template: ComponentStory<typeof TopBarComponent> = () => (
  <TopBarComponent />
);

export const TopBar = Template.bind({});
TopBar.args = {};
