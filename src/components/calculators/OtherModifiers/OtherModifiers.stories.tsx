import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import OtherModifiersComponent from "./OtherModifiers";

export default {
  title: "Calculators/Other Modifiers",
  component: OtherModifiersComponent,
  decorators: [
    (Story) => (
      <div className="h-full overflow-auto pb-14">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof OtherModifiersComponent>;

const Template: ComponentStory<typeof OtherModifiersComponent> = (args) => (
  <OtherModifiersComponent {...args} />
);

export const OtherModifiers = Template.bind({});
OtherModifiers.args = {
  selected: undefined,
};
