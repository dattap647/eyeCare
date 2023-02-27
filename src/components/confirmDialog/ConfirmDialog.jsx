import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

function ConfirmDialog(props) {
  const { confirmDialog } = props;

  return (
    <Dialog
      open={confirmDialog.isOpen}
      sx={{
        padding: 2,
        position: "absolute",
        top: 5,
      }}
    >
      <DialogTitle sx={{ textAlign: "center" }}>
        <Typography variant="h5" align="center" gutterBottom>
          {confirmDialog.title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6" align="center" gutterBottom>
          {confirmDialog.subTitle}
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          size="large"
          color="success"
          fullWidth
          onClick={confirmDialog.onConfirm}
        >
          Yes
        </Button>
        <Button
          variant="contained"
          size="large"
          color="error"
          fullWidth
          onClick={confirmDialog.onCancel}
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;
