import { Box, styled, Typography, Link } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CustomButton from "../../CustomButtom/CustomButton";
import Navbar from "../Navbar/NavBar";

import doctor from "../../../assets/doctor.png";

const Hero = () => {
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

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#5c6",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#5c6f",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to Eye Care Clinic
            </Typography>
            <Title variant="h1">
              Consult top Ophthalmologists online for any Eye concern.
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5c6f", my: 4 }}
            >
              Get the Guidance on eye care with a routine check up and common
              eye problems in one appointment!
            </Typography>
            <Link sx={{ textDecoration: "none" }}>
              <CustomButton
                backgroundColor="#5c5"
                color="#fff"
                buttonText="More About Us"
                heroBtn={true}
              />
            </Link>
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={doctor}
              alt="doctor"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
