import { Link, styled, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import { Link as Links } from "react-router-dom";
import fbIcon from "../../../assets/fbicon.png";
import twitterIcon from "../../../assets//twittericon.png";
import linkedinIcon from "../../../assets//linkedinicon.png";
import { Call, LocationOn, Mail } from "@mui/icons-material";
import CopyRights from "../../CopyRights/CopyRights";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "left",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "start",
    gap: "1rem",
    justifyContent: "start",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "left",
    },
  }));

  const FooterLink = styled(Link)(({ theme }) => ({
    textAlign: "left",
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    textDecoration: "none",

    cursor: "pointer",
    "&:hover": {
      color: "#5c6",
      fontSize: "18px",
    },
  }));

  return (
    <Box sx={{ py: 10, bgcolor: "#E6F0FF", mt: "10px" }}>
      <CustomContainer>
        <CustomContainer>
          <Box textAlign="left">
            <Typography
              sx={{
                fontSize: "20px",
                color: "#5c6",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Eye Care Clinic
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#7A7A7E",
                fontWeight: "500",
                mb: 2,
              }}
            >
              Think of Eye ,Think of Eye care Clinic.
            </Typography>

            <FooterLink component={Links} to="/terms-&-conditions">
              Terms of use
            </FooterLink>
            <br />
            <FooterLink>Privacy Policy</FooterLink>
            <br />

            <IconBox sx={{ my: "10px" }}>
              <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
              <img
                src={twitterIcon}
                alt="twitterIcon"
                style={{ cursor: "pointer" }}
              />
              <img
                src={linkedinIcon}
                alt="linkedinIcon"
                style={{ cursor: "pointer" }}
              />
            </IconBox>
          </Box>

          <Box textAlign="left">
            <Typography
              sx={{
                fontSize: "20px",
                color: "#5c6",
                fontWeight: "700",
                mb: 2,
              }}
            >
              For Patients
            </Typography>

            <FooterLink component={Links} to="/signin">
              Login
            </FooterLink>
            <br />
            <FooterLink component={Links} to="/signup">
              Register
            </FooterLink>
            <br />
            <FooterLink component={Links} to="/dashboard">
              Appointment
            </FooterLink>
          </Box>

          <Box textAlign="left">
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "20px",
                color: "#5c6",
                fontWeight: "700",
                mb: 2,
              }}
            >
              For Doctors
            </Typography>

            <FooterLink component={Links} to="/dasboard">
              Appointmets
            </FooterLink>
            <br />
            <FooterLink component={Links} to="/signin">
              Login
            </FooterLink>
            <br />
            <FooterLink component={Links} to="/signup">
              Register
            </FooterLink>
          </Box>

          <Box textAlign="left">
            <Typography
              sx={{
                fontSize: "20px",
                color: "#5c6",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Get in touch
            </Typography>

            <Stack spacing={1}>
              <Stack direction="row" spacing={2}>
                <LocationOn sx={{ color: "#5c6" }} />
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#7A7A7E",
                    fontWeight: "500",
                  }}
                >
                  4674 Warkhanda Ponda Goa , India
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Call sx={{ color: "#5c6" }} />
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#7A7A7E",
                    fontWeight: "500",
                  }}
                >
                  +91 25632 67832
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Mail sx={{ color: "#5c6" }} />
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#7A7A7E",
                    fontWeight: "500",
                  }}
                >
                  eyecareclinic@domian.com
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </CustomContainer>
      </CustomContainer>
      <CopyRights />
    </Box>
  );
};

export default Footer;
