import { Box, Card, styled, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import serviceContent from "./carosoulContent";
import React from "react";
const Services = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const Services = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    "&:before": {
      transition: "1.9s",
      backgroundImage: "linear-gradient(180deg,#5c6,#02b3ff)",
      transform: "rotate(-45deg) translate(0,-100px)",
    },
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const ServiceBox = styled(Card)(({ theme }) => ({
    display: "flex",
    flexDirection: "Row",
    alignItems: "center",
    height: "250px",
    width: "300px",
    padding: "10px",
    maxWidth: "381px",
    margin: "8px 8px",
    background: "#7ef",
    "&:hover": {
      transition: 1.9,
      backgroundImage: "linear-gradient(180deg,#5c6,#56c)",
    },

    // marginTop: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2),
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E6F0FF",
      }}
    >
      {/* //Green Line */}
      <div
        style={{
          width: "6%",
          height: "5px",
          backgroundColor: "#5c6",
          margin: "10 auto",
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#5c6", my: 3 }}
      >
        Eye Care Advantages.
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
        >
          Everything you need to know, We've been offering personalized eye care
          to patients
        </Typography>
      </CustomBox>

      <Services>
        {serviceContent.map((step, index) => (
          <ServiceBox elevation={8}>
            <Box
              component="img"
              sx={{
                height: "100px",
                display: "block",
                maxWidth: 300,
                overflow: "hidden",
                width: "100px",
              }}
              src={step.imgPath}
              alt={step.label}
            />

            <Stack>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "bold",
                  fontWeight: "600",
                  fontSize: "25px",
                  color: "black",
                  my: 1,
                }}
              >
                {step.label}
              </Typography>

              <Typography
                variant="body2"
                sx={{ fontSize: "14px", color: "black", my: 2 }}
              >
                {step.bodyText}
              </Typography>
            </Stack>
          </ServiceBox>
        ))}
      </Services>
    </Box>
  );
};

export default Services;
