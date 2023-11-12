import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";
import Home from "../Components/Pages/Home/Home";
import MenuPage from "../Components/Pages/MenuPage/MenuPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/ourmenue",
          element: <MenuPage />,
        },
      ],
    },
  ]);