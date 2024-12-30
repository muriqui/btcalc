import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";

import ErrorPage from "./ErrorPage";

import Home from "./routes/index/Home";
import homeLoader from "./routes/index/Home.loader";
import { Step } from "./types";
import { setStep } from "./services/utilityService";
import Root from "./routes/Root";

const meta = {
  component: Home,
  title: "Routes/ErrorPage",
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Error404: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: "/unknown" },
      routing: [
        {
          path: "/",
          element: <Root />,
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              useStoryElement: true,
              loader: async () => {
                setStep(Step.NotStarted);
                return await homeLoader();
              },
            },
          ],
        },
      ],
    }),
  },
};
