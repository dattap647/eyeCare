import { Box, Card, styled, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import doctor from "./DoctorList";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const Teams = () => {
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
    flexDirection: "Column",
    alignItems: "center",

    padding: "10px",
    maxWidth: "381px",
    margin: "8px auto",
    backgroundColor: "#E6F0FF",
    // marginTop: theme.spacing(1),
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
        Our Team of Doctors.
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
          At Eye Care Clinic Our Eye Specialist doctor have more than a decade
          of experience in treating eye patients . Our topmost priority is the
          comfort and well being of the patients.
        </Typography>
      </CustomBox>

      <Services>
        <AutoPlaySwipeableViews sx={{ alignItems: "center" }}>
          {doctor.map((step, index) => (
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
                alt={step.name}
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
                  {step.name}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", color: "#5A6473", my: 2 }}
                >
                  {step.role}
                </Typography>
              </Stack>
            </ServiceBox>
          ))}
        </AutoPlaySwipeableViews>
      </Services>
    </Box>
  );
};

export default Teams;
