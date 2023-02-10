import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../../Context/Authcontext";

function PatientRoute({ element: Element, ...rest }) {
  const { currentUser } = useAuth;
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser !== null && currentUser?.role ? (
          <Element {...props} />
        ) : (
          <Navigate to="/signin" />
        );
      }}
    />
  );
}

export default PatientRoute;
