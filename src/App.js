import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./components/Auth/SignIn";
import Signup from "./components/Auth/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import PageNotFound from "./Pages/404/404";

import Home from "./Pages/Home/Home";
import PrivateDoctorRoute from "./Routes/Doctors/DoctorRoutes";
import PrivatePatientRoute from "./Routes/Patients/PatientRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/patient/*" element={<PrivatePatientRoute />} />
        <Route path="/doctor/*" element={<PrivateDoctorRoute />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
