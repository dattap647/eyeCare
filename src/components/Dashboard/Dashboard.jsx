import {
  AccountCircle,
  ChevronLeft,
  ExitToApp,
  Menu,
  Notifications,
} from "@mui/icons-material";
import {
  Alert,
  AppBar,
  Badge,
  Box,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ConfirmDialog from "../confirmDialog/ConfirmDialog";
import Footer from "../HomePage/Footer/Footer";
import Navbar from "../HomePage/Navbar/NavBar";
import Notification from "../Notification/Notification";
import { secondaryListItems } from "./ListItem";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://eyecare.com" target="blank">
        EyeCare
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

function DashboardContent({ title, children, mainListItems }) {
  const [openDrawer, setOpen] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  // const [openPopup, setOpenPopup]= useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const toggleDrawer = () => {
    setOpen(!openDrawer);
  };

  const handleLogout = () => {
    setConfirmDialog({
      isOpen: true,
      title: "You are logging out!",
      subTitle: "Are you sure you want to exit the app?",
      onConfirm: () => {
        onLogout();
      },
    });
  };

  const onLogout = async () => {
    setError("");
    try {
      //   await logout()
      navigate("/Signin");
    } catch (error) {
      setError("Failed to logout");
    }
  };

  const handleProfile = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar isAuth={true} sx={{ margin: "-10px" }} />
      <Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {error && (
                <Alert severity="error" sx={{ my: 1, width: "100%" }}>
                  {error}
                </Alert>
              )}
              {children}
            </Grid>
          </Container>
        </Box>
      </Box>
      <Footer />
      <ConfirmDialog confirmDialog={confirmDialog} />
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
}

export default function Dashboard({ title, children, mainListItems }) {
  return <DashboardContent children={children} mainListItems={mainListItems} />;
}
