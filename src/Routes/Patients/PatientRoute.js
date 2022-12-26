import React from "react";
import { Navigate } from "react-router-dom";
import { Patient } from "../../Pages";

export const PrivatePatientRoute = () => {
  //check the login details
  const isAuthenticated = true;

  return isAuthenticated ? <Patient /> : <Navigate to="/" />;
};

export default PrivatePatientRoute;
