import React from "react";
import doctor from "../../../assets/doctor2.jpg";
import { Box, Typography, styled, Paper, Avatar } from "@mui/material";

import { mainListItems } from "../../../Pages/Doctor/DoctorItemList";

function Sidebar() {
  const ProfileSideBar = styled(Box)(({ theme }) => ({
    display: "flex",

    flexDirection: "column",

    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }));
  const ProfileInfo = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    py: 1,
    alignItems: "center",
  }));
  return (
    <Paper elevation={3} sx={{ height: "100%" }}>
      <ProfileSideBar>
        <ProfileInfo>
          <Avatar
            src={doctor}
            alt="doctorprofile"
            sx={{ width: 120, height: 120, my: 1 }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: 2,
            }}
          >
            <Typography variant="h6">Dr. Darren Elder</Typography>
            <Typography variant="subtitle1">
              BDS, MDS - Oral & Maxillofacial Surgery
            </Typography>
          </Box>
        </ProfileInfo>
        <Box
          sx={{
            "@media screen and (max-width: 900px)": {
              display: "none",
            },
          }}
        >
          {mainListItems}
        </Box>
      </ProfileSideBar>
    </Paper>
  );
}

export default Sidebar;
