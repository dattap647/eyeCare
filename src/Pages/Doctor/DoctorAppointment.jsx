import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Sidebar from "../../components/Profile/Doctor/Sidebar";
import AppointmentTable from "../../components/Tables/Prescriptions/AppointmentTable";
import usestyle from "./style";

function DoctorAppointment() {
  const useStyle = usestyle();
  return (
    <>
      <Container style={useStyle.container} sx={{}} maxWidth="m">
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item lg={3} md={12} sm={12}>
            <Sidebar />
          </Grid>
          <Grid item lg={9}>
            <Box sx={{ height: "100%" }}>
              <AppointmentTable />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DoctorAppointment;
