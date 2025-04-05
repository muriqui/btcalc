import {
  isRouteErrorResponse,
  useRouteError,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import RouteError from "./components/molecules/RouteError";
import "./index.css";

export const meta = () => [
  { title: "BTcalc: A BattleTech shot calculator" },
  {
    name: "description",
    content:
      "Calculates attack roll target numbers for the BattleTech board game.",
  },
  { name: "theme-color", content: "#fbbf24" },
];

export const links = () => [
  { rel: "manifest", href: "/manifest.json" },
  { rel: "icon", type: "image/svg+xml", href: "/precision-tool.svg" },
  { rel: "mask-icon", href: "/precision-tool.svg", color: "#000000" },
  { rel: "apple-touch-icon", href: "/precision-tool-180.png" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/**
 * The application entry point.
 */
export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  let status = undefined;
  let statusText = "Unknown Error";

  if (isRouteErrorResponse(error)) {
    status = error.status;
    statusText = error.statusText;
  } else if (import.meta.env.DEV && error instanceof Error && error.message) {
    statusText = error.message;
  } else if (typeof error === "string") {
    statusText = error;
  }

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <RouteError status={status} statusText={statusText} />
    </main>
  );
}
