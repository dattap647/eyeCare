import React from "react";
import { ListItem, ListItemIcon, List, ListItemText } from "@mui/material";
import {
  CalendarToday,
  Dashboard,
  HourglassEmpty,
  Logout,
  People,
  PersonPin,
  Receipt,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export const mainListItems = (
  <>
    <List>
      <ListItem component={Link} sx={{ color: "#5c6" }} to="/doctor">
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem
        component={Link}
        sx={{ color: "#5c6" }}
        to="/doctor/appointments"
      >
        <ListItemIcon>
          <CalendarToday />
        </ListItemIcon>
        <ListItemText primary="Appointments" />
      </ListItem>
      {/* <ListItem
        component={Link}
        sx={{ color: "#5c6" }}
        to="/doctor/my-patients"
      >
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="My Patients" />
      </ListItem> */}
      <ListItem component={Link} sx={{ color: "#5c6" }} to="/doctor/timing">
        <ListItemIcon>
          <HourglassEmpty />
        </ListItemIcon>
        <ListItemText primary="Schedule Timings" />
      </ListItem>
      <ListItem component={Link} sx={{ color: "#5c6" }} to="/doctor/invoice">
        <ListItemIcon>
          <Receipt />
        </ListItemIcon>
        <ListItemText primary="Invoice" />
      </ListItem>
      <ListItem component={Link} sx={{ color: "#5c6" }} to="/doctor/profile">
        <ListItemIcon>
          <PersonPin />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
      <ListItem component={Link} sx={{ color: "#5c6" }} to="/doctor/profile">
        <ListItemIcon>
          <Logout />
        </ListItemIcon>
        <ListItemText primary="Log out" />
      </ListItem>
    </List>
  </>
);
