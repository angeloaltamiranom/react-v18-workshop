import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import "./index.css";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { StartTransition } from "./pages/StartTransition";
import { DeferredValue } from "./pages/DeferredValue";
import { SuspenseExample } from "./pages/SuspenseExample";
import { Crappy } from "./pages/Crappy";

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/startTransition",
                element: <StartTransition />,
            },
            {
                path: "/deferredValue",
                element: <DeferredValue />,
            },
            {
                path: "/suspenseExample",
                element: <SuspenseExample />,
            },
            {
              path: "/crappy",
              element: <Crappy />,
          },
        ]
        },
  ]);

  export function Routes() {
    return <RouterProvider router={router} />
  }
