import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const location = useLocation()
  const { user } = useAuth();
  if (!user) {
    return (
      <Navigate state={location?.pathname} to="/login" replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
