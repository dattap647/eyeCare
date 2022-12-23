import {
  ConnectWithoutContactOutlined,
  ContactPageRounded,
  HistoryEduRounded,
  LocalHospitalRounded,
} from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactusDialog from "./ContactUs.jsx";
import "./style.js";
import usestyle from "./style.js";

function PatientDashboard() {
  const [confirmDialog, setConfirmDialog] = useState(false);

  const useStyle = usestyle();

  const handleDialog = () => {
    console.log(confirmDialog);
    setConfirmDialog(!confirmDialog);
  };
  return (
    <React.Fragment>
      <Container style={useStyle.container} maxWidth="m">
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12}>
            <Typography
              component="h1"
              variant="h4"
              color="success"
              gutterBottom
            >
              Welcome Username
            </Typography>
          </Grid>

          {/* Card for Basic Patient Feature */}
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card style={useStyle.card}>
              <CardContent>
                <Card style={useStyle.cardIcon}>
                  <LocalHospitalRounded />
                </Card>
                <div style={useStyle.cardContent}>
                  <Typography style={useStyle.cardTitle}>
                    Appointment
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    textAlign="center"
                  >
                    Request to see a Doctor
                  </Typography>
                </div>
              </CardContent>
              <CardActions style={useStyle.cardActions} align="center">
                <Button
                  variant="contained"
                  component={Link}
                  to="/patient/appointment"
                  color="success"
                >
                  Book Interview
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card style={useStyle.card}>
              <CardContent>
                <Card style={useStyle.cardIcon}>
                  <HistoryEduRounded />
                </Card>
                <div style={useStyle.cardContent}>
                  <Typography style={useStyle.cardTitle}>
                    My Appointments
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    textAlign="center"
                  >
                    View Appointment History.
                  </Typography>
                </div>
              </CardContent>
              <CardActions style={useStyle.cardActions} align="center">
                <Button
                  variant="contained"
                  component={Link}
                  to=""
                  color="success"
                >
                  View History
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card style={useStyle.card}>
              <CardContent>
                <Card style={useStyle.cardIcon}>
                  <ContactPageRounded />
                </Card>
                <div style={useStyle.cardContent}>
                  <Typography style={useStyle.cardTitle}>Reports</Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    textAlign="center"
                  >
                    View Diagonasis and Analysis Report
                  </Typography>
                </div>
              </CardContent>
              <CardActions style={useStyle.cardActions} align="center">
                <Button
                  variant="contained"
                  component={Link}
                  to=""
                  color="success"
                >
                  Prescriptions
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card style={useStyle.card}>
              <CardContent>
                <Card style={useStyle.cardIcon}>
                  <ConnectWithoutContactOutlined />
                </Card>
                <div style={useStyle.cardContent}>
                  <Typography style={useStyle.cardTitle}>Contact Us</Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    textAlign="center"
                  >
                    Need Help?
                  </Typography>
                </div>
              </CardContent>
              <CardActions style={useStyle.cardActions} align="center">
                <Button
                  variant="contained"
                  component={Link}
                  onClick={handleDialog}
                  color="success"
                >
                  Contact
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <ContactusDialog opendialog={confirmDialog} setopen={setConfirmDialog} />
    </React.Fragment>
  );
}

export default PatientDashboard;
