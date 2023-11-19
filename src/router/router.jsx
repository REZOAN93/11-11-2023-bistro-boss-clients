import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";
import Home from "../Components/Pages/Home/Home";
import MenuPage from "../Components/Pages/MenuPage/MenuPage";
import Order from "../Components/Pages/Order/Order";
import Login from "../Components/Authentication/Login/Login";
import Register from "../Components/Authentication/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Components/Authentication/Profile";
import Dashboard from "../Components/Pages/Dashboard/Dashboard";
import Cart from "../Components/Pages/Dashboard/Cart/Cart";
import AllUser from "../Components/Pages/Dashboard/AllUsers/AllUser";
import Additems from "../Components/Pages/Dashboard/AddItems/Additems";
import Adminroute from "./Adminroute";

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
        element: <PrivateRoute><MenuPage /></PrivateRoute>,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      // admin routes
      {
        path: 'allusers',
        element: <Adminroute><AllUser></AllUser></Adminroute>
      },
      {
        path: 'additems',
        element: <Adminroute><Additems></Additems></Adminroute>
      }
    ]
  }
]);