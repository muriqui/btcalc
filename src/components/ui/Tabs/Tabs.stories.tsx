import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TabsComponent from "./Tabs";
import Tab from "./Tab";

export default {
  title: "UI/Tabs",
  component: TabsComponent,
} as ComponentMeta<typeof TabsComponent>;

const options = [
  {
    label: "Tab one",
    id: "1",
    content: "This is the first tab.",
  },
  {
    label: "Tab two",
    id: "2",
    content: "This is the second tab.",
  },
];

const Template: ComponentStory<typeof TabsComponent> = (args) => (
  <TabsComponent {...args} />
);

export const Tabs = Template.bind({});
Tabs.args = {
  children: options.map((option) => (
    <Tab key={option.label} label={option.label} id={option.id}>
      {option.content}
    </Tab>
  )),
};
