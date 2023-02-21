import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const ProfileWidget = styled(Box)(({ theme }) => ({
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

function Sidebar() {
  return (
    <Paper>
      <ProfileWidget>
        <ProfileInfo>
          <Avatar
            src={""}
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
            <Typography variant="h3" fontSize="18px">
              Patient Name
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "end",
              }}
            >
              <Typography variant="body1">Patient ID: </Typography>
              <Typography variant="body2"> PT0016</Typography>
            </Box>
          </Box>
        </ProfileInfo>
        <hr style={{ margin: "0 16px" }} />
        {/* <Divider variant="middle" sx={{ mx: 1, color: "black" }} /> */}

        <List>
          <ListItem
            secondaryAction={
              <Typography sx={{ color: "#272b41", fontSize: "15px" }}>
                28
              </Typography>
            }
          >
            <ListItemText
              sx={{ fontWeight: "90px", fontSize: "20px" }}
              primary="Age:"
            />
          </ListItem>

          <ListItem
            secondaryAction={
              <Typography sx={{ color: "#272b41", fontSize: "15px" }}>
                AB+
              </Typography>
            }
          >
            <ListItemText
              sx={{ fontWeight: "90px", fontSize: "20px" }}
              primary="Blood Group:"
            />
          </ListItem>

          <ListItem
            secondaryAction={
              <Typography sx={{ color: "#272b41", fontSize: "15px" }}>
                8956472318
              </Typography>
            }
          >
            <ListItemText
              sx={{ fontWeight: "90px", fontSize: "20px" }}
              primary="Phone Number:"
            />
          </ListItem>
        </List>
      </ProfileWidget>
    </Paper>
  );
}

export default Sidebar;
