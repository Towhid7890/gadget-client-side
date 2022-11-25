import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "./Main";
import Login from "./../Login/Login";
import Register from "./../Register/Register";
import SingleCategories from "../Home/Categories/SingleCategories";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../Dashboard/DashboardLayout/DashboardLayout";
import MyOrder from "../Dashboard/MyOrders/MyOrder";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
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
        path: "/category/:userId",
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.userId}`);
        },
        element: (
          <PrivateRoute>
            <SingleCategories />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <MyOrder></MyOrder>,
      },
    ],
  },
]);
