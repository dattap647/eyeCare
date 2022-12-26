import React from "react";
import { Navigate } from "react-router-dom";
import Doctors from "../../Pages/Doctor/Doctors";

export const PrivateDoctorRoute = () => {
  //check the login details
  const isAuthenticated = true;

  return isAuthenticated ? <Doctors /> : <Navigate to="/" />;
};

export default PrivateDoctorRoute;
