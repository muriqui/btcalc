import type { Meta, StoryObj } from "@storybook/react";

import CallToAction from "./CallToAction";
import Heading from "../atoms/Heading";
import ButtonLink from "../atoms/ButtonLink";
import Link from "../atoms/Link";
import Eyebrow from "../atoms/Eyebrow";

const meta = {
  component: CallToAction,
  tags: ["autodocs"],
} satisfies Meta<typeof CallToAction>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    heading: <Heading level={1}>Some heading text</Heading>,
    primary: <ButtonLink to="/">Primary action</ButtonLink>,
  },
};

export const Complex: Story = {
  args: {
    ...Basic.args,
    heading: (
      <Heading level={1}>
        Some heading text long enough to potentially wrap
      </Heading>
    ),
    secondary: <Link to="/">A secondary action</Link>,
    eyebrow: <Eyebrow>Some eyebrow text</Eyebrow>,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia laoreet purus in accumsan. Fusce eget justo sit amet ligula cursus pulvinar.",
  },
};

export const LeftAligned: Story = {
  args: {
    ...Complex.args,
    align: "left",
  },
};
