import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        loader: () => fetch("/news.json"),
        element: <CategoryNews></CategoryNews>,
      },
    ],
  },
  {
    path: "/auth",
    element: <h3>Authentication Layout</h3>,
  },
  {
    path: "/news",
    element: <h3>News Layout</h3>,
  },
  {
    path: "/*",
    element: <h3>Error 404</h3>,
  },
]);

export default router;
