import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

const useStyles = (theme) => ({
  dialog: {
    padding: 2,
    position: "absolute",
    top: 5,
  },
  dialogContent: {
    textAlign: "center",
  },
  dialogTitle: {
    textAlign: "center",
  },
  dialogAction: {
    justifyContent: "space-between",
  },
});

function ConfirmDialog(props) {
  const { confirmDialog } = props;
  const classes = useStyles();
  return (
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.dialogTitle}></DialogTitle>
      <DialogContent>
        <Typography variant="h6" align="center" gutterBottom>
          {confirmDialog.title}
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
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;
