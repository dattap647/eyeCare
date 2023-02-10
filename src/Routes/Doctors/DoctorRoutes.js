import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../../Context/Authcontext";

function DoctorRoutes({ element: Element, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser !== null && currentUser?.role ? (
          <Element {...props} />
        ) : (
          <Navigate to="/patient" />
        );
      }}
    />
  );
}

export default DoctorRoutes;
