import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./components/Auth/SignIn";
import Signup from "./components/Auth/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import { Patient } from "./Pages";
import Home from "./Pages/Home/Home";
import PatientAppointment from "./Pages/Patient/PatientAppointment";
import PatientDashboard from "./Pages/Patient/PatientDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/patient/*" element={<Patient />} />
        <Route
          path="/patient/dashboard"
          element={
            <Dashboard
              title="Patient Dashboard"
              children={<PatientDashboard />}
            />
          }
        />
        <Route
          path="/patient/appointment"
          element={
            <Dashboard
              title="Patient Dashboard"
              children={<PatientAppointment />}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
