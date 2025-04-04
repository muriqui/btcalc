import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPage from "./ErrorPage";
import "./index.css";

import Root from "./routes/Root";

import Play from "./routes/play/Play";
import playLoader from "./routes/play/Play.loader";
import Setup from "./routes/play/index/Setup";
import setupAction from "./routes/play/index/Setup.action";
import Movement from "./routes/play/movement/Movement";
import SelectTargets from "./routes/play/targets/SelectTargets";

import { Step } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function convert(m: any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { clientLoader, clientAction, default: Component, ...rest } = m;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...rest,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    loader: clientLoader,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    action: clientAction,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    Component,
  };
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, lazy: () => import("./routes/Home").then(convert) },
    ],
  },
  {
    path: "play",
    element: <Play />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Setup />, action: setupAction },
      { path: Step.Movement, element: <Movement />, loader: playLoader },
      {
        path: Step.SelectTargets,
        element: <SelectTargets />,
        loader: playLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
