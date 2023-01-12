import { Box, Card, styled, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import serviceContent from "./carosoulContent";
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
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const ServiceBox = styled(Card)(({ theme }) => ({
    display: "flex",
    flexDirection: "Row",
    alignItems: "center",
    minwidth: "300px",
    padding: "10px",
    maxWidth: "381px",
    margin: theme.spacing(5),
    backgroundColor: "#E6F0FF",
    // marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 2, 2),
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
          <ServiceBox>
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
                variant="body2"
                sx={{
                  fontFamily: "bold",
                  fontWeight: "500",
                  fontSize: "20px",
                  color: "#3B3c",
                  my: 1,
                }}
              >
                {step.label}
              </Typography>
              {/* <Box
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              > */}
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", color: "#5A6473", my: 2 }}
              >
                {step.bodyText}
              </Typography>
              {/* </Box> */}
            </Stack>
          </ServiceBox>
        ))}
      </Services>
    </Box>
  );
};

export default Services;
