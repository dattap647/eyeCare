import React from "react";
import SignIn from "../../components/Auth/SignIn/SignIn";
import { useAuth } from "../../Context/Authcontext";
import Doctors from "../../Pages/Doctor/Doctors";

function DoctorRoutes() {
  console.log("hello doctor");
  const { currentUser } = useAuth();
  return <Doctors />;
  // return currentUser !== null && currentUser?.role ? <Doctors /> : <SignIn />;
}

export default DoctorRoutes;
