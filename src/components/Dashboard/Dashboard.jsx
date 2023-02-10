import { Alert, Box, Container, Grid } from "@mui/material";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/Authcontext";
import ConfirmDialog from "../confirmDialog/ConfirmDialog";
import Footer from "../HomePage/Footer/Footer";
import Navbar from "../HomePage/Navbar/NavBar";
import Notification from "../Notification/Notification";

function DashboardContent({ children, mainListItems }) {
  const navigate = useNavigate();
  const sideListItems = mainListItems;
  const { currentUser } = useAuth();
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
      <Navbar isAuth={currentUser} sideListItems={sideListItems} />
      <Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,

            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ my: 1 }}>
            <Box container>
              {error && (
                <Alert severity="error" sx={{ my: 1, width: "100%" }}>
                  {error}
                </Alert>
              )}
              {children}
            </Box>
          </Container>
        </Box>
      </Box>
      <Footer />
      <ConfirmDialog confirmDialog={confirmDialog} />
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
}

export default function Dashboard({ children, mainListItems }) {
  return <DashboardContent children={children} mainListItems={mainListItems} />;
}
