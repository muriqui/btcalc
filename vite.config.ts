import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { reactRouterDevTools } from "react-router-devtools";

const isStorybook = process.argv[1]?.includes("storybook");

export default defineConfig({
  plugins: [
    tailwindcss(),
    !isStorybook && reactRouterDevTools(),
    !isStorybook && reactRouter(),
    tsconfigPaths(),
  ],
});
