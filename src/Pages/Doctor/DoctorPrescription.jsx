import React from "react";
import { Paper, Container, Grid, Typography } from "@mui/material";
import usestyle from "./style";
import Sidebar from "../../components/Profile/Doctor/Sidebar";

function DoctorPrescription() {
  const classes = usestyle();
  return (
    <>
      <Container className={classes.container} sx={{ py: 4 }} maxWidth="m">
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12} lg={3}>
            <Sidebar />
          </Grid>
          <Grid item lg={9}></Grid>
        </Grid>
      </Container>
    </>
  );
}
export default DoctorPrescription;
