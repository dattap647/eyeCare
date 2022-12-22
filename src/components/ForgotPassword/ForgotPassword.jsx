import { LockResetRounded } from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Button,
  CssBaseline,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

function ForgotPassword() {
  const initialValues = {
    email: "",
  };
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Required"),
  });

  const handleSubmit = (values, props) => {
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);

    try {
      setMessage("");
      setError("");
      setLoading(true);
      //  resetPassword using values.email
      setMessage("Check your Email Inbox for further instructions");
    } catch (error) {
      setError("Failed to Reset Password");
    }

    setLoading(false);
  };

  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 350,
    margin: "20px auto",
  };
  const textfieldStyle = {
    bordercolor: "#56c595",
    margin: "50px 0 ",
    width: 300,
    color: "#56c595",
  };
  const avatarStyle = { backgroundColor: "#7BE495" };
  const btnstyle = { backgroundColor: "#56c596", margin: "40px 0" };

  return (
    <Grid>
      <CssBaseline />
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockResetRounded />
          </Avatar>
          <Typography variant="h4">Password Reset</Typography>
        </Grid>
        {error && (
          <Alert severity="error" sx={{ my: 1, width: "100%" }}>
            {error}
          </Alert>
        )}

        {message && (
          <Alert severity="info" sx={{ my: 1, width: "100%" }}>
            {message}
          </Alert>
        )}

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form autoComplete="off">
              <Field
                as={TextField}
                variant="outlined"
                required
                color="success"
                style={textfieldStyle}
                id="email"
                label="Email Address"
                placeholder="Enter Email"
                name="email"
                autoComplete="email"
                autoFocus
                helperText={<ErrorMessage name="email" />}
              />

              <Button
                type="submit"
                variant="contained"
                style={btnstyle}
                disabled={loading}
                // disabled={props.isSubmitting}
                onClick={() => {}}
              >
                {loading ? "Loading..." : "Reset Password"}
              </Button>

              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Link href="/signin" variant="body2">
                    {`Login instead?`}
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Link href="/signup" variant="body2">
                    {"Need Account?"}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
}

export default ForgotPassword;
