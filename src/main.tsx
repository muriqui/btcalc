import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import "./index.css";

import Root from "./routes/Root";
import Home from "./routes/Home";
import Play from "./routes/play/Play";
import Setup from "./routes/play/Setup";
import Movement from "./routes/play/Movement";
import SelectTargets from "./routes/play/SelectTargets";

import {
  loaderHome,
  loaderMovement,
  loaderSelectTargets,
} from "./services/loaders";

import { Step } from "./types";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Home />, loader: loaderHome }],
  },
  {
    path: "play",
    element: <Play />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Setup /> },
      { path: Step.Movement, element: <Movement />, loader: loaderMovement },
      {
        path: Step.SelectTargets,
        element: <SelectTargets />,
        loader: loaderSelectTargets,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
