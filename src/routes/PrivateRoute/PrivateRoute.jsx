import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingCircle from "../../components/ui/LoadingCircle";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, authLoading } = useContext(AuthContext);
  const location = useLocation();

  if (authLoading) {
    return <LoadingCircle />;
  }
  if (!user?.uid) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
