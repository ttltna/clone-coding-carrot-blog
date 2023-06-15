import { createBrowserRouter } from "react-router-dom";
import Home from "./layouts/Home";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/culture",
        element: <div>culture</div>,
      },
      {
        path: "/service",
        element: <div>service</div>,
      },
      {
        path: "/jobs",
        element: <div>jobs</div>,
      },
      {
        path: "/blog",
        element: <div>blog</div>,
      },
    ],
  },
]);

export default router;
