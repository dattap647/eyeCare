import {
  Assignment,
  LocalHospitalRounded,
  MedicationOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import useStyle from "./style";

function DoctorDashboard() {
  const usestyle = useStyle();
  return (
    <React.Fragment>
      <Container style={usestyle.container} sx={{ py: 4 }} maxWidth="m">
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12}>
            <Typography
              variant="h4"
              color="primary"
              gutterBottom
              style={usestyle.cardTitle}
            >
              Welcome Doctorname
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card style={usestyle.card}>
              <CardContent>
                <Card style={usestyle.cardIcon}>
                  <LocalHospitalRounded />
                </Card>
                <div style={usestyle.cardContent}>
                  <Typography style={usestyle.cardTitle} variant="h5">
                    Appointments
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    textAlign="center"
                  >
                    View Pending Appointments
                  </Typography>
                </div>
              </CardContent>
              <CardActions style={usestyle.cardActions}>
                <Button
                  variant="contained"
                  component={Link}
                  style={usestyle.btnstyle}
                  to="/doctor/appointment"
                >
                  Appointment List
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card classes={usestyle.card}>
              <CardContent>
                <Card style={usestyle.cardIcon}>
                  <MedicationOutlined />
                </Card>
                <div style={usestyle.cardContent}>
                  <Typography style={usestyle.cardTitle} variant="h5">
                    Prescriptions
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    textAlign="center"
                  >
                    View All Prescription
                  </Typography>
                </div>
              </CardContent>
              <CardActions style={usestyle.cardActions}>
                <Button
                  variant="contained"
                  component={Link}
                  style={usestyle.btnstyle}
                  to="/doctor/prescription"
                >
                  Prescription
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card classes={usestyle.card}>
              <CardContent>
                <Card style={usestyle.cardIcon}>
                  <LocalHospitalRounded />
                </Card>
                <div style={usestyle.cardContent}>
                  <Typography style={usestyle.cardTitle} variant="h5">
                    Records
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    textAlign="center"
                  >
                    View Appointment Records
                  </Typography>
                </div>
              </CardContent>
              <CardActions style={usestyle.cardActions}>
                <Button
                  variant="contained"
                  component={Link}
                  style={usestyle.btnstyle}
                  to="/doctor/records"
                >
                  View List
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card classes={usestyle.card}>
              <CardContent>
                <Card style={usestyle.cardIcon}>
                  <Assignment />
                </Card>
                <div style={usestyle.cardContent}>
                  <Typography style={usestyle.cardTitle} variant="h5">
                    Edit Form
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    textAlign="center"
                  >
                    Edit Patient Form
                  </Typography>
                </div>
              </CardContent>
              <CardActions style={usestyle.cardActions}>
                <Button
                  variant="contained"
                  component={Link}
                  style={usestyle.btnstyle}
                  to="/doctor/edit-form"
                >
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default DoctorDashboard;
