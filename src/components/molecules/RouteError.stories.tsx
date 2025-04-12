import type { Meta, StoryObj } from "@storybook/react";

import RouteError from "./RouteError";

const meta = {
  component: RouteError,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RouteError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NotFound: Story = {
  args: {
    status: 404,
    statusText: "Not Found",
  },
};

export const DevMode: Story = {
  args: {
    statusText: "Unknown variable: blah",
    stack:
      "Play@http://localhost:5173/src/routes/play/Play.tsx:7:42\nrenderWithHooks@http://localhost:5173/node_modules/.vite/deps/chunk-WRD5HZVH.js:11548:35\nmountIndeterminateComponent@http://localhost:5173/node_modules/.vite/deps/chunk-WRD5HZVH.js:14926:36\nbeginWork$1@http://localhost:5173/node_modules/.vite/deps/chunk-WRD5HZVH.js:19753:31\nperformUnitOfWork@http://localhost:5173/node_modules/.vite/deps/chunk-WRD5HZVH.js:19198:31\nworkLoopSync@http://localhost:5173/node_modules/.vite/deps/chunk-WRD5HZVH.js:19137:30\nrenderRootSync@http://localhost:5173/node_modules/.vite/deps/chunk-WRD5HZVH.js:19116:27\nrecoverFromConcurrentError@http://localhost:5173/node_modules/.vite/deps/chunk-WRD5HZVH.js:18736:42\nperformConcurrentWorkOnRoot@http://localhost:5173/node_modules/.vite/deps/chunk-WRD5HZVH.js:18684:56\nworkLoop@http://localhost:5173/node_modules/.vite/deps/chunk-WRD5HZVH.js:197:50\nflushWork@http://localhost:5173/node_modules/.vite/deps/chunk-WRD5HZVH.js:176:30\nperformWorkUntilDeadline@http://localhost:5173/node_modules/.vite/deps/chunk-WRD5HZVH.js:384:50",
  },
};
