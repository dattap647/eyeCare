import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  Checkbox,
  FormControlLabel,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Button,
  FormHelperText,
  styled,
  Alert,
} from "@mui/material";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import { Stack } from "@mui/system";
import Navbar from "../../HomePage/Navbar/NavBar";
import Footer from "../../HomePage/Footer/Footer";

const DrSignup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    address: "",
    role: "",
    registerNumber: "",
    termsAndConditions: false,
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "It's too short")
      .required("Required"),
    lastName: Yup.string()
      .min(3, "It's too short")
      .required("Required"),
    email: Yup.string()
      .email("Enter valid email")
      .required("Required"),
    gender: Yup.string()
      .oneOf(["male", "female"], "Required")
      .required("Required"),
    address: Yup.string().required("required"),
    phoneNumber: Yup.number()
      .typeError("Enter valid Phone Number")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required("Required"),
    registerNumber: Yup.number().required("Required"),
    role: Yup.string().required("Required"),
    termsAndConditions: Yup.string().oneOf(
      ["true"],
      "Accept terms & conditions"
    ),
  });

  const handleSubmit = async (values, props) => {
    console.log("I'm xubmitted");

    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);

    try {
      setError("");
      setLoading(true);
      console.log(values);
      // axios.post("", values).then((res) => {
      //   console.log(res);
      // });

      // navigate("/signin");
    } catch (error) {
      setError("Failed to create an account");
    }
  };
  const PaperContainer = styled(Paper)(({ theme }) => ({
    padding: 20,
    width: 600,
    margin: "20px 10px",

    [theme.breakpoints.down("sm")]: {
      width: "387px",
      margin: "20px 5px 20px 5px",
    },
  }));

  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#5c6" };
  const btnstyle = { backgroundColor: "#5c6", margin: "8px 0" };
  const marginTop = { marginTop: 5 };

  return (
    <>
      <Navbar />
      <Grid display="inline-flex">
        <PaperContainer elevation={10}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlined />
            </Avatar>
            <h4
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Link to="/signup">Not A Doctor?</Link>
            </h4>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </Grid>
          {error && (
            <Alert severity="error" sx={{ my: 1, width: "100%" }}>
              {error}
            </Alert>
          )}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(props) => (
              <Form>
                <Stack direction="row" spacing={2} style={{ marginTop }}>
                  <Field
                    as={TextField}
                    fullWidth
                    name="firstName"
                    label="Firstname"
                    color="success"
                    style={{ marginTop: 16 }}
                    placeholder="Enter your First name"
                    helperText={
                      <ErrorMessage
                        component="div"
                        style={{ color: "red" }}
                        name="firstName"
                      />
                    }
                  />
                  <Field
                    as={TextField}
                    fullWidth
                    name="lastName"
                    label="Lastname"
                    color="success"
                    style={{ marginTop: 16 }}
                    placeholder="Enter your Last name"
                    helperText={
                      <ErrorMessage
                        component="div"
                        style={{ color: "red" }}
                        name="lastName"
                      />
                    }
                  />
                </Stack>
                <Field
                  as={TextField}
                  fullWidth
                  name="email"
                  label="Email"
                  color="success"
                  style={{ marginTop: 16 }}
                  placeholder="Enter your Email"
                  helperText={
                    <ErrorMessage
                      component="div"
                      style={{ color: "red" }}
                      name="email"
                    />
                  }
                />
                <Stack>
                  <Field
                    as={TextField}
                    fullWidth
                    name="address"
                    label="Address"
                    color="success"
                    style={{ marginTop: 16 }}
                    placeholder="Enter your Address"
                    helperText={
                      <ErrorMessage
                        component="div"
                        style={{ color: "red" }}
                        name="address"
                      />
                    }
                  />
                </Stack>
                <Stack
                  spacing={2}
                  direction="row"
                  style={{
                    display: "flex",
                    marginTop: 16,
                    alignItems: "baseline",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{
                      marginLeft: 20,
                      marginTop: 5,
                    }}
                  >
                    <FormLabel component="legend" color="success">
                      Gender
                    </FormLabel>
                    <Field as={RadioGroup} aria-label="gender" name="gender">
                      <FormControlLabel
                        value="female"
                        control={<Radio color="success" />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio color="success" />}
                        label="Male"
                      />
                      <FormHelperText>
                        <ErrorMessage
                          component="div"
                          style={{ color: "red" }}
                          name="gender"
                        />
                      </FormHelperText>
                    </Field>
                  </FormControl>

                  <Field
                    as={TextField}
                    fullWidth
                    name="role"
                    label="Designation"
                    color="success"
                    style={{ marginTop: 16 }}
                    placeholder="Your Expertise"
                    helperText={
                      <ErrorMessage
                        component="div"
                        style={{ color: "red" }}
                        name="role"
                      />
                    }
                  />
                </Stack>
                <Field
                  as={TextField}
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  color="success"
                  style={{ marginTop: 16 }}
                  placeholder="Enter your phone number"
                  helperText={
                    <ErrorMessage
                      component="div"
                      style={{ color: "red" }}
                      name="phoneNumber"
                    />
                  }
                />

                <Field
                  as={TextField}
                  fullWidth
                  name="registerNumber"
                  label=" Register Number"
                  color="success"
                  style={{ marginTop: 16 }}
                  placeholder="Enter Register Number"
                  helperText={
                    <ErrorMessage
                      component="div"
                      style={{ color: "red" }}
                      name="registerNumber"
                    />
                  }
                />

                <Field
                  as={TextField}
                  fullWidth
                  name="password"
                  type="password"
                  label="Password"
                  color="success"
                  style={{ marginTop: 16 }}
                  placeholder="Enter your password"
                  helperText={
                    <ErrorMessage
                      component="div"
                      style={{ color: "red" }}
                      name="password"
                    />
                  }
                />
                <Field
                  as={TextField}
                  fullWidth
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  color="success"
                  style={{ marginTop: 16 }}
                  placeholder="Confirm your password"
                  helperText={
                    <ErrorMessage
                      component="div"
                      style={{ color: "red" }}
                      name="confirmPassword"
                      color="error"
                    />
                  }
                />
                <Stack alignItems="center">
                  <FormControlLabel
                    control={
                      <Field
                        as={Checkbox}
                        color="success"
                        name="termsAndConditions"
                      />
                    }
                    label="I accept the terms and conditions."
                  />
                  <FormHelperText>
                    <ErrorMessage
                      component="div"
                      style={{ color: "red" }}
                      name="termsAndConditions"
                    />
                  </FormHelperText>
                </Stack>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={props.isSubmitting}
                  style={btnstyle}
                  color="primary"
                >
                  {props.isSubmitting ? "Loading" : "Sign up"}
                </Button>
              </Form>
            )}
          </Formik>
          <Typography>
            Have An Account? <Link to="/signin">Sign In</Link>
          </Typography>
        </PaperContainer>
      </Grid>
      <Footer />
    </>
  );
};

export default DrSignup;
