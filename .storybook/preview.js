import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "!style-loader!css-loader!postcss-loader!../src/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
