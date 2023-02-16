import { Alert, Slide, Snackbar } from "@mui/material";
import React from "react";

function SlideTransition(props) {
  return <Slide {...props} direction="down" />;
}

function Notification(props) {
  const { notify, setNotify } = props;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setNotify({
      ...notify,
      isOpen: false,
    });
  };

  return (
    <Snackbar
      open={notify.isOpen}
      autoHideDuration={2500}
      TransitionComponent={SlideTransition}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={handleClose}
    >
      <Alert severity={notify.type} onClose={handleClose} sx={{ width: 400 }}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
}

export default Notification;
