import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPage from "./ErrorPage";
import "./index.css";

import Root from "./routes/Root";

import Play from "./routes/play/Play";

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
      { index: true, lazy: () => import("./routes/play/Setup").then(convert) },
      {
        path: Step.Movement,
        lazy: () => import("./routes/play/movement/Movement").then(convert),
      },
      {
        path: Step.SelectTargets,
        lazy: () => import("./routes/play/targets/SelectTargets").then(convert),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
