import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MyContext } from "../../context/AuthContext";
import Loader from "../Loading/Loader";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(MyContext);
  let location = useLocation();
  if (loading) {
    return <Loader></Loader>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
