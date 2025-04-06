import { beforeAll } from "vitest";
import { setProjectAnnotations } from "@storybook/react";

// Import the a11y addon annotations.
import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";

// Import our own annotations.
import * as projectAnnotations from "./preview";

// @see https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
const project = setProjectAnnotations([
  a11yAddonAnnotations,
  projectAnnotations,
]);

beforeAll(project.beforeAll);
