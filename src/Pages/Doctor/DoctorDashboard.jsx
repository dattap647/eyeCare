import React from "react";
import { Box, Grid } from "@mui/material";
import Analysis from "../../components/Graph/Analysis";
import AppointmentTabs from "../../components/Tabs/AppointmentTabs";
import Sidebar from "../../components/Profile/Doctor/Sidebar";

function DoctorDashboard() {
  return (
    <Box marginLeft={1} width="100%">
      <Grid container columnSpacing={2} rowSpacing={2}>
        <Grid item lg={3} md={3} sm={12}>
          {/* doctor profile Side BAr */}
          <Sidebar />
        </Grid>
        <Grid item lg={9} md={9} sm={12}>
          {/* Appointment Staistic */}
          <Analysis />
          <Grid item lg={12} md={12} sm={12}>
            <Box width="100%">
              {/* today and  upcoming appoitnment */}
              <AppointmentTabs />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DoctorDashboard;
