import React from "react";
import { Paper, Container, Grid, Typography } from "@mui/material";
import usestyle from "./style";

function DoctorPrescription() {
  const classes = usestyle();
  return (
    <>
      <Container className={classes.container} sx={{ py: 4 }} maxWidth="m">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <Typography component="h1" variant="h4" color="primary">
              Prescriptions
            </Typography>
            <Paper className={classes.paperContent} elevation={5}>
              No Record Found !
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default DoctorPrescription;
