import React from "react";
//import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/Authcontext";
import Patient from "../../Pages/Patient/Patient";

function PatientRoute() {
  const { currentUser } = useAuth;
  console.log(currentUser);
  return <Patient />;
  // return currentUser !== null && currentUser.role ? (
  //   <Navigate to="/doctor" replace />
  // ) : (
  //   <Patient />
  // );
}

export default PatientRoute;
