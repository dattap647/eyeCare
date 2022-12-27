import React from "react";
import {
  Alert,
  Container,
  Grid,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import usestyle from "./style";

function EditForm() {
  const classes = usestyle();
  return (
    <>
      <Container className={classes.container} sx={{ py: 4 }} maxWidth="m">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <Typography component="h1" variant="h4" color="primary">
              Form
            </Typography>
            <Paper elevation={5}>
              <Snackbar
                style={classes.root}
                open={true}
                autoHideDuration={1500}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
              >
                <Alert>Form Comming Soon</Alert>
              </Snackbar>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default EditForm;
