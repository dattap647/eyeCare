import React from "react";

// import { useAuth } from "../../Context/Authcontext";
import Doctors from "../../Pages/Doctor/Doctors";

function DoctorRoutes() {
  console.log("hello doctor");
  //const { currentUser } = useAuth();
  return <Doctors />;
  // return currentUser !== null ? <SignIn /> : <Doctors />;
}

export default DoctorRoutes;
