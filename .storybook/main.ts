import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "storybook-addon-remix-react-router",
    "@storybook/experimental-addon-test",
  ],
  framework: "@storybook/react-vite",
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },
};
export default config;
