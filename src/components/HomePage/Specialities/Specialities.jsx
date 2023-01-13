import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";

import Images from "./ImageContent";

const Specialities = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));
  const ImgContainer = styled(Box)(() => ({
    width: "100%",
    alignContent: "center",
  }));

  const HouseBox = styled(Box)(({ theme }) => ({
    borderRadius: "10px",
    maxWidth: 350,

    backgroundColor: "#5c6",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <Box sx={{ mt: 4, backgroundColor: "#F5FAFE", py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#5c6", fontSize: "35px", fontWeight: "bold" }}
          >
            Our Clinical Specialities
          </Typography>
        </PropertiesTextBox>

        <PropertiesBox>
          {Images.map((i) => (
            <HouseBox>
              <ImgContainer sx={{ my: 3 }}>
                <img
                  src={i.imgPath}
                  alt="ClinicalPhoto"
                  style={{ maxWidth: "80%", borderRadius: "10px" }}
                />
              </ImgContainer>
              <Box sx={{ padding: "1rem" }}>
                <Typography variant="body2" sx={{ fontWeight: "700" }}>
                  {i.tittle}
                </Typography>
                <Typography variant="body2" sx={{ my: 1 }}>
                  {i.bodyText}
                </Typography>
              </Box>
            </HouseBox>
          ))}
        </PropertiesBox>
      </Container>
    </Box>
  );
};

export default Specialities;
