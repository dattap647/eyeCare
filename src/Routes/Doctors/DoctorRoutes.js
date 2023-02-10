import React from "react";
import { Navigate, Route } from "react-router-dom";
import SignIn from "../../components/Auth/SignIn/SignIn";
import { useAuth } from "../../Context/Authcontext";

function DoctorRoutes({ component: Components }) {
  const { currentUser } = useAuth();

  return currentUser !== null && currentUser?.role ? (
    <Components />
  ) : (
    <SignIn />
  );
}

export default DoctorRoutes;
