import Dashboard from "../../components/Dashboard/Dashboard";
import React from "react";
import { Route, Routes } from "react-router-dom";
import DoctorDashboard from "./DoctorDashboard";
import DoctorPrescription from "./DoctorPrescription";
import DoctorAppointment from "./DoctorAppointment";
import { mainListItems } from "./DoctorItemList";
import DoctorAppointmentRecords from "./DoctorAppointmentRecords";
import EditForm from "./EditForm";
import PageNotFound from "../404/404";

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
            mainListItems={mainListItems}
          />
        }
      />
      <Route
        path="/dashboard"
        element={
          <Dashboard
            title="Doctor Dashboard"
            children={<DoctorDashboard />}
            mainListItems={mainListItems}
          />
        }
      />
      <Route
        path="/appointment"
        element={
          <Dashboard
            title="Doctor Dashboard"
            children={<DoctorAppointment />}
            mainListItems={mainListItems}
          />
        }
      />
      <Route
        path="/prescription"
        element={
          <Dashboard
            title="Doctor Dashboard"
            children={<DoctorPrescription />}
            mainListItems={mainListItems}
          />
        }
      />
      <Route
        path="/records"
        element={
          <Dashboard
            title="Doctor Dashboard"
            children={<DoctorAppointmentRecords />}
            mainListItems={mainListItems}
          />
        }
      />
      <Route
        path="/edit-form"
        element={
          <Dashboard
            title="Doctor Dashboard"
            children={<EditForm />}
            mainListItems={mainListItems}
          />
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Doctors;
