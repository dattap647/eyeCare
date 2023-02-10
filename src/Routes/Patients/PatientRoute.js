import React from "react";
import { Navigate, Route } from "react-router-dom";
import SignIn from "../../components/Auth/SignIn/SignIn";
import { useAuth } from "../../Context/Authcontext";

function PatientRoute({ component: Components }) {
  const { currentUser } = useAuth;
  console.log("hello");
  return currentUser !== null && !currentUser?.role ? (
    <Components />
  ) : (
    <SignIn />
  );
}

export default PatientRoute;
