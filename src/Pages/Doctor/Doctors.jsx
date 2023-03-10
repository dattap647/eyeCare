import Dashboard from "../../components/Dashboard/Dashboard";
import React from "react";
import { Route, Routes } from "react-router-dom";
import DoctorDashboard from "./DoctorDashboard";
import DoctorPrescription from "./DoctorPrescription";
import DoctorAppointment from "./DoctorAppointment";

import DoctorAppointmentRecords from "./DoctorAppointmentRecords";
import EditForm from "./EditForm";
import PageNotFound from "../404/404";
import MainListItems from "./MainListItems";
import PatientDetails from "./PatientDetails";

function Doctors() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Dashboard
            title="Doctor Dashboard"
            children={<DoctorDashboard />}
            mainListItems={<MainListItems />}
          />
        }
      />
      <Route
        path="/dashboard"
        element={
          <Dashboard
            title="Doctor Dashboard"
            children={<DoctorDashboard />}
            mainListItems={<MainListItems />}
          />
        }
      />
      <Route
        path="/appointments"
        element={
          <Dashboard
            title="Doctor Dashboard"
            children={<DoctorAppointment />}
            mainListItems={<MainListItems />}
          />
        }
      />
      <Route
        path="/prescription"
        element={
          <Dashboard
            children={<DoctorPrescription />}
            mainListItems={<MainListItems />}
          />
        }
      />

      <Route
        path="/patient-details"
        element={
          <Dashboard
            children={<PatientDetails />}
            mainListItems={<MainListItems />}
          />
        }
      />
      <Route
        path="/records"
        element={
          <Dashboard
            children={<DoctorAppointmentRecords />}
            mainListItems={<MainListItems />}
          />
        }
      />
      <Route
        path="/edit-form"
        element={
          <Dashboard
            children={<EditForm />}
            mainListItems={<MainListItems />}
          />
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Doctors;
