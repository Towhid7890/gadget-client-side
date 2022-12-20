import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "./Main";
import Login from "./../Login/Login";
import Register from "./../Register/Register";
import SingleCategories from "../Home/Categories/SingleCategories";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../Dashboard/DashboardLayout/DashboardLayout";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddProduct from "../AddProduct/AddProduct";
import Dashboard from "../Dashboard/Dashboard";
import MyProduct from "../Dashboard/MyProduct/MyProduct";
import AllBuyer from "../Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../Dashboard/AllSeller/AllSeller";
import Blog from "./../Home/Blog/Blog";
import Notfound from "../Notfound/Notfound";
import Report from "../Dashboard/Report/Report";
import Faq from "../Home/Faq/Faq";
import Contact from "../Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Notfound></Notfound>,
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
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
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
          return fetch(
            `https://assignment-12-server-orcin.vercel.app/category/${params.userId}`
          );
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
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/myProduct",
        element: <MyProduct></MyProduct>,
      },
      {
        path: "/dashboard/allBuyer",
        element: (
          <AdminRoute>
            <AllBuyer></AllBuyer>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allSeller",
        element: (
          <AdminRoute>
            <AllSeller></AllSeller>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/report",
        element: (
          <AdminRoute>
            <Report></Report>
          </AdminRoute>
        ),
      },
    ],
  },
]);
