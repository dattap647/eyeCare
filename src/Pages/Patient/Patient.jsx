import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import PatientAppointment from "./PatientAppointment";
import PatientDashboard from "./PatientDashboard";

function Patient() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Dashboard
            title="Patient Dashboard"
            children={<PatientDashboard />}
          />
        }
      />
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

      {/* <Route path="/patient/appointment-history" /> */}

      {/* <Route path="/patient/reports"/> */}

      {/* <Route path="/patient/contact-us" e/>
       */}
    </Routes>
  );
}

export default Patient;
