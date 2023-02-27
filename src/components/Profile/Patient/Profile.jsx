import { AccountCircle } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/Authcontext";
import ConfirmDialog from "../../confirmDialog/ConfirmDialog";
import Notification from "../../Notification/Notification";
import React from "react";
function ProfileIconDropdown() {
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
        navigate("/");
      }, 1500);
    } catch (error) {
      handleNotify("Failed to Logout", "error");
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    navigate("/patient/profile");
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog confirmDialog={confirmDialog} />
    </div>
  );
}

export default ProfileIconDropdown;
