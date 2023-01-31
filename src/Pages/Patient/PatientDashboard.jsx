import {
  Box,
  Button,
  Container,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

import doctor from "../../assets/login.png";
import pres from "../../assets/prescriptions.png";
import appoint from "../../assets/appointment.png";
import record from "../../assets/records.png";
import bill from "../../assets/billing.png";

import { Link } from "react-router-dom";

function PatientDashboard() {
  const ImageBox = styled(Box)(({ theme }) => ({
    display: "center",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));
  const CustomButton2 = styled(Button)(({ theme }) => ({
    backgroundColor: "#8d8",
    color: "white",
    borderRadius: "7px",
    display: "block",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: "white",
      color: "#8d8",
      borderColor: "#8d8",
    },
  }));

  return (
    <React.Fragment>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "35px",
                color: "#5c6f",
                fontWeight: "500",
                my: 2,
              }}
            >
              Welcome to Eye Care Clinic
            </Typography>
            <ImageBox>
              <img
                src={doctor}
                alt="doctor"
                style={{ width: "50%", height: "90%" }}
              />
            </ImageBox>
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <Grid container rowSpacing="10px" columnSpacing="10px">
              <Grid item xs={11} sm={6} md={6} lg={6}>
                <CustomButton2 component={Link} to="/patient/appointment">
                  <Box
                    sx={{
                      flex: "1",
                      display: "flex",
                      justifyContent: "start",
                    }}
                  >
                    <Typography sx={{ fontSize: "18px" }}>
                      Appointments
                    </Typography>
                  </Box>

                  <img
                    src={appoint}
                    alt="dotor"
                    style={{ width: "40%", backgroundColor: "transparent" }}
                  />
                </CustomButton2>
              </Grid>
              <Grid item xs={11} sm={6} md={6} lg={6}>
                <CustomButton2 component={Link} to="/patient/prescriptions">
                  <Box>
                    <Box
                      sx={{
                        flex: "1",
                        display: "flex",
                        justifyContent: "start",
                      }}
                    >
                      <Typography sx={{ fontSize: "18px" }}>
                        Prescriptions
                      </Typography>
                    </Box>

                    <img src={pres} alt="dotor" style={{ width: "40%" }} />
                  </Box>
                </CustomButton2>
              </Grid>
              <Grid item xs={11} sm={6} md={6} lg={6}>
                <CustomButton2 component={Link} to="/patient/reports">
                  <Box>
                    <Box
                      sx={{
                        flex: "1",
                        display: "flex",
                        justifyContent: "start",
                      }}
                    >
                      <Typography sx={{ fontSize: "18px" }}>
                        Medical Records
                      </Typography>
                    </Box>

                    <img src={record} alt="dotor" style={{ width: "60%" }} />
                  </Box>
                </CustomButton2>
              </Grid>
              <Grid item xs={11} sm={6} md={6} lg={6}>
                <CustomButton2 to="/patient/reports">
                  <Box>
                    <Box
                      sx={{
                        flex: "1",
                        display: "flex",
                        justifyContent: "start",
                      }}
                    >
                      <Typography sx={{ fontSize: "18px" }}>
                        Billing Records
                      </Typography>
                    </Box>

                    <img src={bill} alt="dotor" style={{ width: "40%" }} />
                  </Box>
                </CustomButton2>
              </Grid>
            </Grid>
          </Box>
        </CustomBox>
      </Container>
    </React.Fragment>
  );
}

export default PatientDashboard;
