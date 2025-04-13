import type { Meta, StoryObj } from "@storybook/react";

import ButtonGroup from "./ButtonGroup";
import Button from "../atoms/Button";
import ButtonLink from "../atoms/ButtonLink";

const meta = {
  component: ButtonGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Centered: Story = {
  args: {
    children: (
      <>
        <Button variant="outlined">Button</Button>
        <ButtonLink variant="outlined" to="/">
          Button link
        </ButtonLink>
      </>
    ),
  },
};

export const LeftAligned: Story = {
  args: {
    ...Centered.args,
    align: "left",
  },
};
