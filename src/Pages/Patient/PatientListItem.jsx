import {
  ContactPageRounded,
  Dashboard,
  EventAvailable,
  History,
  HistoryEduRounded,
} from "@mui/icons-material";
import { ListItem, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Tooltip title="Dashboard">
      <ListItem button component={Link} to="/patient/dashboard">
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Tooltip>

    <Tooltip title="My Appointment">
      <ListItem button component={Link} to="/patient/appointment">
        <ListItemIcon>
          <EventAvailable />
        </ListItemIcon>
        <ListItemText primary="Book Appointment" />
      </ListItem>
    </Tooltip>

    <Tooltip title="Reports">
      <ListItem button component={Link} to="/patient/reports">
        <ListItemIcon>
          <ContactPageRounded />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
    </Tooltip>
    <Tooltip title="History">
      <ListItem button component={Link} to="/patient/history">
        <ListItemIcon>
          <HistoryEduRounded />
        </ListItemIcon>
        <ListItemText primary="My Appointment" />
      </ListItem>
    </Tooltip>

    {/* <Tooltip title="Prescriptions">
      <ListItem button component={Link} to="/patient/prescriptions">
        <ListItemIcon>
          <GiIcons.GiPill className="reactIcon" />
        </ListItemIcon>
        <ListItemText primary="Prescriptions" />
      </ListItem>
    </Tooltip> */}
  </div>
);
