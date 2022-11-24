import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "./Main";
import Login from "./../Login/Login";
import Register from "./../Register/Register";
import SingleCategories from "../Home/Categories/SingleCategories";

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
        element: <SingleCategories />,
      },
    ],
  },
]);
