import React, { useState } from "react";
import {
  ListItem,
  ListItemIcon,
  List,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import {
  CalendarToday,
  Dashboard,
  HourglassEmpty,
  Logout,
  PersonPin,
  Receipt,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/Authcontext";
import ConfirmDialog from "../../components/confirmDialog/ConfirmDialog";
import Notification from "../../components/Notification/Notification";

function MainListItems() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const handleNotify = (msg, type) => {
    setNotify({
      isOpen: true,
      message: msg,
      type: type,
    });
  };

  const handleLogout = () => {
    setConfirmDialog({
      isOpen: true,
      title: "You are logging out!",
      subTitle: "Are you sure you want to exit ?",
      onConfirm: () => {
        onLogout();
      },
      onCancel: () => {
        navigate(-1);
      },
    });
  };

  const onLogout = async () => {
    try {
      await logout();
      handleNotify("Logout Succesfully", "success");
      setTimeout(() => {
        navigate("/patient");
      }, 1500);
    } catch (error) {
      handleNotify("Failed to Logout", "error");
    }
  };
  return (
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
        <ListItemButton sx={{ color: "#5c6" }} onClick={handleLogout}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Log out" />
        </ListItemButton>
      </List>
      <ConfirmDialog confirmDialog={confirmDialog} />
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
}

export default MainListItems;
