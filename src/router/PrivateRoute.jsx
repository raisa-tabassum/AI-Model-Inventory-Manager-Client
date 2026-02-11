import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return (
      <Navigate state={location?.pathname} to="/auth/login" replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
