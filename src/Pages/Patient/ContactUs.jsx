import { EmailRounded } from "@mui/icons-material";
import {
  Button,
  DialogActions,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Link,
} from "@mui/material";
// import { Link } from "react-router-dom";

const useStyles = (theme) => ({
  dialog: {
    padding: 10,
    position: "absolute",
    top: 5,
  },
  dialogContent: {
    textAlign: "center",
    margin: "30px 0",
    width: "300px",
  },
  dialogTitle: {
    textAlign: "center",
  },
  dialogAction: {
    justifyContent: "space-between",
  },
});

function ContactusDialog(props) {
  const { opendialog, setopen } = props;
  const handleOpen = () => {
    setopen(!opendialog);
  };
  const classes = useStyles();
  return (
    <Dialog open={opendialog} classes={{ paper: classes.dialog }}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <Typography variant="h6" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Link
          href="mailto:dattap647@gmail.com
       "
        >
          <EmailRounded /> Email
        </Link>
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          size="large"
          color="success"
          fullWidth
          onClick={handleOpen}
        >
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ContactusDialog;
