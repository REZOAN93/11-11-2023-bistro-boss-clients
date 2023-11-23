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
import ManageItems from "../Components/Pages/Dashboard/ManageItems/ManageItems";
import UpdateItems from "../Components/Pages/Dashboard/UpdateItems/UpdateItems";
import Payment from "../Components/Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Components/Pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../Components/Pages/Dashboard/AdminHome/AdminHome";
import Userhome from "../Components/Pages/Dashboard/UserHome/Userhome";

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
        path: 'userhome',
        element: <Userhome></Userhome>
      },
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymenthistroy',
        element: <PaymentHistory></PaymentHistory>
      },
      // admin routes
      {
        path: 'adminHome',
        element: <Adminroute><AdminHome></AdminHome></Adminroute>
      },
      {
        path: 'allusers',
        element: <Adminroute><AllUser></AllUser></Adminroute>
      },
      {
        path: 'additems',
        element: <Adminroute><Additems></Additems></Adminroute>
      },
      {
        path: 'manageItems',
        element: <Adminroute><ManageItems></ManageItems></Adminroute>
      },
      {
        path: 'updateItems/:id',
        element: <Adminroute><UpdateItems></UpdateItems></Adminroute>,
        loader: ({ params }) => fetch(`https://11-11-2023-bistro-boss-server.vercel.app/menu/${params.id}`)
      }
    ]
  }
]);