import { Grid, Paper, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Sidebar from "../../components/Profile/Patient/Sidebar";
import MedicalRecords from "../../components/Tables/Patient/MedicalRecords/MedicalRecords";
import PreviousAppointment from "../../components/Tables/Patient/PreviousAppointment/PreviousAppointment";
import PreviousPrescription from "../../components/Tables/Patient/PreviousPrescription/PreviousPrescription";
import TodayAppointmentTable from "../../components/Tables/TodaysAppointment/TodayAppointmentTable";

function PatientDetails() {
  return (
    <Grid container columnSpacing={1} rowSpacing={1}>
      <Grid item lg={3}>
        <Sidebar />

        <Box component={Paper} my={2} px={2}>
          <Typography variant="h5" textAlign="left">
            {" "}
            Reports
          </Typography>
          <ul style={{ listStyle: "none", textAlign: "left" }}>
            <li>
              <a href="f">dental-test.pdf</a>
            </li>
            <li>
              <a href="f">dental-test.pdf</a>
            </li>
          </ul>
        </Box>
      </Grid>
      <Grid item lg={9}>
        <Appointmets />
      </Grid>
    </Grid>
  );
}

function Appointmets() {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTab = (value) => {
    switch (value) {
      case "1":
        return <PreviousAppointment />;

      case "2":
        return <PreviousPrescription />;

      case "3":
        return <MedicalRecords />;

      default:
        <TodayAppointmentTable />;
    }
  };
  return (
    <Paper sx={{ height: "100%" }}>
      <Box
        sx={{
          marginBottom: 4,
          mx: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab
            sx={{
              px: 8,
            }}
            value="1"
            label="Appointments"
            visibleScrollbar={true}
          />
          <Tab
            sx={{
              px: 8,
            }}
            iconPosition="start"
            value="2"
            label="Prescription"
          />
          <Tab
            sx={{
              px: 8,
            }}
            iconPosition="start"
            value="3"
            label="Medical Records"
          />
        </Tabs>
      </Box>

      <Box sx={{ my: 2, mx: 2 }}>{handleTab(value)}</Box>
    </Paper>
  );
}

export default PatientDetails;
