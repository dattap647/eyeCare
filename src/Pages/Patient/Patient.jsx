import React from "react";

import { Route, Routes } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import PageNotFound from "../404/404";
import PatientAppointment from "./PatientAppointment";
import PatientAppointmentHistory from "./PatientAppointmentHistory";
import PatientDashboard from "./PatientDashboard";
import { mainListItems } from "./PatientListItem";
import PatientReport from "./PatientReport";

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
            mainListItems={mainListItems}
          />
        }
      />
      <Route
        path="/dashboard"
        element={
          <Dashboard
            title="Patient Dashboard"
            children={<PatientDashboard />}
            mainListItems={mainListItems}
          />
        }
      />
      <Route
        path="/appointment"
        element={
          <Dashboard
            title="Patient Dashboard"
            children={<PatientAppointment />}
            mainListItems={mainListItems}
          />
        }
      />
      <Route
        path="/reports"
        element={
          <Dashboard
            title="Patient Dashboard"
            children={<PatientReport />}
            mainListItems={mainListItems}
          />
        }
      />
      <Route
        path="/history"
        element={
          <Dashboard
            title="Patient Dashboard"
            children={<PatientAppointmentHistory />}
            mainListItems={mainListItems}
          />
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Patient;
