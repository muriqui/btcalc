import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { userEvent, within, expect, fireEvent, waitFor } from "@storybook/test";

import Modal from "./Modal";
import Button from "../atoms/Button";

const meta = {
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: false,
  },
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();

    return (
      <>
        <Button onClick={() => updateArgs({ isOpen: true })}>
          Click to open modal
        </Button>
        <Modal
          {...args}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          isOpen={isOpen}
          onClose={() => updateArgs({ isOpen: false })}
        >
          This is the modal.
        </Modal>
      </>
    );
  },
};

export const Open: Story = {
  ...Default,
  // Use a play function (rather than just setting isOpen to true in args) so that it doesn't interfere with Docs display.
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Click to open", async () => {
      await userEvent.click(canvas.getByText("Click to open modal"));
    });
  },
};

export const Behaviors: Story = {
  ...Default,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Verify that it starts closed.", async () => {
      await expect(canvas.queryByRole("dialog")).not.toBeInTheDocument();
    });

    await step("Click to open.", async () => {
      await userEvent.click(canvas.getByText("Click to open modal"));
      await expect(canvas.getByRole("dialog")).toBeVisible();
    });

    await step("Click to close.", async () => {
      await userEvent.click(canvas.getByText("Close"));
      await waitFor(() =>
        expect(canvas.queryByRole("dialog")).not.toBeInTheDocument(),
      );
    });

    await step("Click to open again.", async () => {
      await userEvent.click(canvas.getByText("Click to open modal"));
      await expect(canvas.getByRole("dialog")).toBeVisible();
    });

    await step("Press Escape to close.", async () => {
      await fireEvent.keyDown(canvasElement, { key: "Escape" });
      await waitFor(() =>
        expect(canvas.queryByRole("dialog")).not.toBeInTheDocument(),
      );
    });
  },
};
