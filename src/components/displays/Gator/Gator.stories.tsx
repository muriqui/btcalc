import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TopBar from "components/ui/TopBar/TopBar";
import GatorComponent from "./Gator";

export default {
  title: "Displays/GATOR",
  component: GatorComponent,
  decorators: [
    (Story) => (
      <>
        <TopBar />
        <Story />
      </>
    ),
  ],
  parameters: { layout: "fullscreen" },
} as ComponentMeta<typeof GatorComponent>;

const Template: ComponentStory<typeof GatorComponent> = () => (
  <GatorComponent />
);

export const GATOR = Template.bind({});
GATOR.args = {};
