import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";

import Images from "./ImageContent";

const Specialities = () => {
  const SpecialitiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const SpecialitiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));
  const ImgContainer = styled(Box)(() => ({
    width: "100%",
    alignContent: "center",
  }));

  const ImageBox = styled(Box)(({ theme }) => ({
    borderRadius: "10px",
    maxWidth: 350,

    backgroundColor: "#E6F0FF",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <Box sx={{ mt: 4, backgroundColor: "#F5FAFE", py: 10 }}>
      <Container>
        <SpecialitiesTextBox>
          <Typography
            sx={{ color: "#5c6", fontSize: "35px", fontWeight: "bold" }}
          >
            Our Clinical Specialities
          </Typography>
        </SpecialitiesTextBox>

        <SpecialitiesBox>
          {Images.map((i) => (
            <ImageBox>
              <ImgContainer sx={{ my: 3 }}>
                <img
                  src={i.imgPath}
                  alt="ClinicalPhoto"
                  style={{ maxWidth: "80%", borderRadius: "10px" }}
                />
              </ImgContainer>
              <Box sx={{ padding: "1rem" }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "700", fontSize: "20px", color: "#5c6" }}
                >
                  {i.tittle}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    my: 1,
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#7A7A7E",
                  }}
                >
                  {i.bodyText}
                </Typography>
              </Box>
            </ImageBox>
          ))}
        </SpecialitiesBox>
      </Container>
    </Box>
  );
};

export default Specialities;
