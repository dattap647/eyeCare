import { Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

import usestyle from "./style";

function DoctorAppointmentRecords() {
  const useStyle = usestyle();
  return (
    <>
      <Container style={useStyle.container} sx={{ py: 4 }} maxWidth="m">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography
              component="h1"
              variant="h4"
              color="primary"
              style={useStyle.cardTitle}
            >
              Records
            </Typography>

            <Paper style={useStyle.paperContent}> No Record Found!</Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DoctorAppointmentRecords;
