import type { Preview } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";
import "../src/index.css";

const preview: Preview = {
  decorators: [withRouter],
  parameters: {
    a11y: { test: "error" },
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
