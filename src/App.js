import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import SignIn from "./components/Auth/SignIn/SignIn";
import DrSignup from "./components/Auth/SignUp/SignUpDoctor";
import Signup from "./components/Auth/SignUp/SignUpUser";
import Dashboard from "./components/Dashboard/Dashboard";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import AuthProvider from "./Context/Authcontext";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PageNotFound from "./Pages/404/404";

import Home from "./Pages/Home/Home";
import DoctorRoute from "./Routes/Doctors/DoctorRoutes";
import PatientRoute from "./Routes/Patients/PatientRoute";
import Terms from "./Pages/Term&Conditions/Terms";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-doctor" element={<DrSignup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/terms-&-conditions" element={<Terms />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/patient/*" element={<PatientRoute />} />
          <Route path="/doctor/*" element={<DoctorRoute />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
