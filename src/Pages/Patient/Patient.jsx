import React from "react";

import { Route, Routes } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import UpdateProfile from "../../components/UpdateProfile/UpdateProfile";
import PageNotFound from "../404/404";
import PatientAppointment from "./PatientAppointment";
import PatientDashboard from "./PatientDashboard";
import PatientForm from "./PatientForm";

import PatientPrescriptions from "./PatientPrescriptions";
import PatientRcords from "./PatientRecords";

function Patient() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Dashboard children={<PatientDashboard />} />}
      />
      <Route
        path="/dashboard"
        element={
          <Dashboard
            title="Patient Dashboard"
            children={<PatientDashboard />}
          />
        }
      />
      <Route
        path="/appointment"
        element={
          <Dashboard
            title="Patient Dashboard"
            children={<PatientAppointment />}
          />
        }
      />
      <Route
        path="/reports"
        element={<Dashboard children={<PatientRcords />} />}
      />
      <Route
        path="/prescriptions"
        element={<Dashboard children={<PatientPrescriptions />} />}
      />
      <Route
        path="/profile"
        element={<Dashboard children={<UpdateProfile />} />}
      />
      <Route
        path="/booking"
        element={<Dashboard children={<PatientForm />} />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Patient;
