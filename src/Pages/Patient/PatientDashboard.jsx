import {
  ConnectWithoutContactOutlined,
  ContactPageRounded,
  HistoryEduRounded,
  LocalHospitalRounded,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactusDialog from "./ContactUs.jsx";
import "./style.js";
import usestyle from "./style";
import doctor from "../../assets/login.jpg";
import { height, Stack } from "@mui/system";

function PatientDashboard() {
  const [confirmDialog, setConfirmDialog] = useState(false);

  const useStyle = usestyle();
  const ImageBox = styled(Box)(({ theme }) => ({
    display: "center",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CardContainer = styled(Card)((theme) => ({
    width: 200,

    backgroundColor: "transparent",
    float: "right",
  }));
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const handleDialog = () => {
    console.log(confirmDialog);
    setConfirmDialog(!confirmDialog);
  };
  return (
    <React.Fragment>
      <Container style={useStyle.container}>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#5c6f",
                fontWeight: "500",
                my: 2,
              }}
            >
              Welcome to Eye Care Clinic
            </Typography>
            <ImageBox sx={{ flex: "1" }}>
              <img
                src={doctor}
                alt="doctor"
                style={{ width: "40%", height: "80%" }}
              />
            </ImageBox>
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <Grid container>
              <Grid item xs={11} sm={6} md={6} lg={4}>
                <CardContainer>
                  <CardContent>
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
                      style={useStyle.btnstyle}
                    >
                      Book Interview
                    </Button>
                  </CardActions>
                </CardContainer>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={4}>
                <CardContainer>
                  <CardContent>
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
                      style={useStyle.btnstyle}
                    >
                      Book Interview
                    </Button>
                  </CardActions>
                </CardContainer>
              </Grid>

              {/* <Grid item xs={12} sm={6} mx={6} lg={4}>
            <Card>
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
                  to="/patient/history"
                  style={useStyle.btnstyle}
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
                  to="/patient/reports"
                  style={useStyle.btnstyle}
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
                  style={useStyle.btnstyle}
                >
                  Contact
                </Button>
              </CardActions>
            </Card>
          </Grid> */}
            </Grid>

            {/* Card for Basic Patient Feature */}
          </Box>
        </CustomBox>
      </Container>

      <ContactusDialog opendialog={confirmDialog} setopen={setConfirmDialog} />
    </React.Fragment>
  );
}

export default PatientDashboard;
