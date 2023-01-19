import { LockResetRounded } from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Button,
  Grid,
  Link,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import doctor from "../../assets/forgotpassword.jpg";
import CustomButton from "../CustomButtom/CustomButton";
import Footer from "../HomePage/Footer/Footer";
import Navbar from "../HomePage/Navbar/NavBar";

function ForgotPassword() {
  const initialValues = {
    email: "",
  };
  const [error, setError] = useState("");

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

      //  resetPassword using values.email
      setMessage("Check your Email Inbox for further instructions");
    } catch (error) {
      setError("Failed to Reset Password");
    }
  };

  const ImageBox = styled(Box)(({ theme }) => ({
    flex: "1",
    display: "block",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  const PaperContainer = styled(Paper)(({ theme }) => ({
    padding: 20,
    width: 350,
    margin: "20px 10px",
    alignItems: "left",
    [theme.breakpoints.down("md")]: {
      height: "450px",

      margin: "20px 5px 20px 5px",
    },
  }));
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
  const avatarStyle = { backgroundColor: "#5c6" };
  const btnstyle = { backgroundColor: "#56c596", margin: "10px 0" };

  return (
    <>
      <Navbar />
      <Grid display="inline-flex">
        <Stack direction="row">
          <ImageBox sx={{ flex: "1" }}>
            <img src={doctor} alt="doctor" style={{ width: "50%" }} />
          </ImageBox>
          <PaperContainer elevation={10}>
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
                    helperText={
                      <ErrorMessage
                        name="email"
                        component="div"
                        style={{ color: "red" }}
                      />
                    }
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={props.isSubmitting}
                    style={btnstyle}
                    color="primary"
                  >
                    {props.isSubmitting ? "Loading" : "Reset Password"}
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
          </PaperContainer>
        </Stack>
      </Grid>
      <Footer />
    </>
  );
}

export default ForgotPassword;
