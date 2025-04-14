import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import Modal from "./Modal";
import Button from "../atoms/Button";

const meta = {
  component: Modal,
  tags: ["autodocs", "no-tests"],
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
