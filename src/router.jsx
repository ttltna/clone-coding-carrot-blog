import { createBrowserRouter } from "react-router-dom";
import RootPage from "./components/RootPage";
import Play from "./Play";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Play />,
    children: [
      {
        path: "/",
        element: <RootPage />,
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
