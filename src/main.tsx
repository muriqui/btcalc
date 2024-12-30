import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import "./index.css";

import Root from "./routes/Root";
import Home from "./routes/index/Home";
import homeLoader from "./routes/index/Home.loader";

import Play from "./routes/play/Play";
import playLoader from "./routes/play/Play.loader";
import Setup from "./routes/play/index/Setup";
import setupAction from "./routes/play/index/Setup.action";
import Movement from "./routes/play/movement/Movement";
import SelectTargets from "./routes/play/targets/SelectTargets";

import { Step } from "./types";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Home />, loader: homeLoader }],
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
