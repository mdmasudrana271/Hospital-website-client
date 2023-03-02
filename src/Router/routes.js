import { createBrowserRouter } from "react-router-dom";
import Application from "../components/Application/Application";
import Articles from "../components/Articles/Articles";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/articles",
        element: <Articles></Articles>,
      },
      {
        path: "/application",
        element: <Application></Application>,
      },
    ],
  },
]);

export default router;
