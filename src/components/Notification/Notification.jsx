import { Alert, Snackbar } from "@mui/material";
import React from "react";

const useStyles = () => ({
  root: {
    top: 9,
  },
});

function Notification(props) {
  const { notify, setNotify } = props;
  const classes = useStyles();

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
      style={classes.root}
      open={notify.isOpen}
      autoHideDuration={2500}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleClose}
    >
      <Alert severity={notify.type} onClose={handleClose}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
}

export default Notification;
