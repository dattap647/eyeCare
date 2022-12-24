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
  const handleClickNotification = () => {
    setNotify({
      isOpen: true,
      message: "Notifications coming soon! 😃",
      type: "info",
    });
    //   setOpenPopup(true);
    //   setTimeout(function () {
    //     setOpenPopup(false);
    //   }, 3000);
  };

  return (
    <>
      <Box>
        <CssBaseline />
        <AppBar style={{ backgroundColor: "#329d9c" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(openDrawer && { display: "none" }),
              }}
            >
              <Tooltip title="Menu">
                <Menu />
              </Tooltip>
            </IconButton>

            {/* Titile on DashboardContent */}
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              align="center"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {title}
            </Typography>

            <IconButton onClick={handleClickNotification}>
              <Badge badgeContent={1} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={openDrawer} onClose={toggleDrawer} style={{ width: 400 }}>
          <Stack direction="row">
            {" "}
            <Typography
              variant="h4"
              color="text.success"
              align="center"
              margin={1}
            >
              Eye Care
            </Typography>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeft />
              </IconButton>
            </Toolbar>
          </Stack>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List> {secondaryListItems}</List>

          <List sx={{ mt: "auto" }}>
            <Tooltip title="Account">
              <ListItem button onClick={handleProfile}>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                {/* <ListItemText
                primary={currentUser.displayName || currentUser.email}
              /> */}
                <ListItemText primary="Username" />
              </ListItem>
            </Tooltip>
          </List>
          <List>
            <Tooltip title="Logout">
              <ListItem button className="flex-end" onClick={handleLogout}>
                <ListItemIcon>
                  <ExitToApp />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </Tooltip>
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: "#cff4d2",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {error && (
                <Alert severity="error" sx={{ my: 1, width: "100%" }}>
                  {error}
                </Alert>
              )}
              {children}
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
      <ConfirmDialog confirmDialog={confirmDialog} />
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
}

export default function Dashboard({ title, children, mainListItems }) {
  return (
    <DashboardContent
      title={title}
      children={children}
      mainListItems={mainListItems}
    />
  );
}
