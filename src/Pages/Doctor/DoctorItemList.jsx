import {
  Assignment,
  ContactPageRounded,
  Dashboard,
  EventAvailable,
  HistoryEduRounded,
} from "@mui/icons-material";
import { ListItem, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Tooltip title="Dashboard">
      <ListItem button component={Link} to="/doctor/dashboard">
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Tooltip>

    <Tooltip title=" Appointment">
      <ListItem button component={Link} to="/doctor/appointment">
        <ListItemIcon>
          <EventAvailable />
        </ListItemIcon>
        <ListItemText primary="Appointment" />
      </ListItem>
    </Tooltip>

    <Tooltip title="Prescription">
      <ListItem button component={Link} to="/doctor/prescription">
        <ListItemIcon>
          <ContactPageRounded />
        </ListItemIcon>
        <ListItemText primary="Prescription" />
      </ListItem>
    </Tooltip>
    <Tooltip title="Records">
      <ListItem button component={Link} to="/doctor/records">
        <ListItemIcon>
          <HistoryEduRounded />
        </ListItemIcon>
        <ListItemText primary="Records" />
      </ListItem>
    </Tooltip>
    <Tooltip title="Form">
      <ListItem button component={Link} to="/doctor/edit-form">
        <ListItemIcon>
          <Assignment />
        </ListItemIcon>
        <ListItemText primary="Edit Form" />
      </ListItem>
    </Tooltip>
  </div>
);
