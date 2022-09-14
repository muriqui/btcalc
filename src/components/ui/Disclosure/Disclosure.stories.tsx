import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DisclosureComponent from "./Disclosure";

export default {
  title: "UI/Disclosure",
  component: DisclosureComponent,
} as ComponentMeta<typeof DisclosureComponent>;

const Template: ComponentStory<typeof DisclosureComponent> = (args) => (
  <DisclosureComponent {...args} />
);

export const Disclosure = Template.bind({});
Disclosure.args = {
  summary: "This is the summary",
  description: "Optional description",
  children: <p>Example details</p>,
};
