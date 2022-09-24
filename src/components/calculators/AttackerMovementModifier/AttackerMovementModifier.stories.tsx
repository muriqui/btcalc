import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AttackerMovementModifierComponent from "./AttackerMovementModifier";

export default {
  title: "Calculators/Attacker Movement Modifier",
  component: AttackerMovementModifierComponent,
  decorators: [
    (Story) => (
      <div className="h-full overflow-auto pb-14">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof AttackerMovementModifierComponent>;

const Template: ComponentStory<typeof AttackerMovementModifierComponent> = (
  args
) => <AttackerMovementModifierComponent {...args} />;

export const AttackerMovementModifier = Template.bind({});
AttackerMovementModifier.args = {
  selected: undefined,
};
