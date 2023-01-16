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
  InputAdornment,
  IconButton,
  styled,
  FormGroup,
  Select,
  MenuItem,
} from "@mui/material";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  AddCircleOutlineOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { Box, Stack } from "@mui/system";
import Navbar from "../HomePage/Navbar/NavBar";
import Footer from "../HomePage/Footer/Footer";
const Signup = () => {
  const navigate = useNavigate();
  const initialValues = {
    Firstname: "",
    Lastname: "",
    email: "",
    gender: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    address: "",
    role: "",
    doctorLicenceNumber: "",
    termsAndConditions: false,
  };

  const [showInput, setShowInput] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    Firstname: Yup.string().min(3, "It's too short").required("Required"),
    Lastname: Yup.string().min(3, "It's too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    gender: Yup.string()
      .oneOf(["male", "female"], "Required")
      .required("Required"),

    role: Yup.string().required("required"),
    doctorLicenceNumber: Yup.number().required("Required"),
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

    termsAndConditions: Yup.string().oneOf(
      ["true"],
      "Accept terms & conditions"
    ),
  });
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (values, props) => {
    navigate("/signin");
    // console.log(values);
    // console.log(props);

    // props.setSubmitting(false);
    // setTimeout(() => {
    //   props.resetForm();
    //   props.setSubmitting(false);
    // }, 2000);
    //Perform authenctication
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
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { backgroundColor: "#56c596", margin: "8px 0" };
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
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </Grid>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <Stack direction="row" spacing={2} style={{ marginTop }}>
                  <Field
                    as={TextField}
                    fullWidth
                    name="firstname"
                    label="Firstname"
                    color="success"
                    style={{ marginTop: 16 }}
                    placeholder="Enter your First name"
                    helperText={<ErrorMessage name="firstname" />}
                  />
                  <Field
                    as={TextField}
                    fullWidth
                    name="lastname"
                    label="Lastname"
                    color="success"
                    style={{ marginTop: 16 }}
                    placeholder="Enter your Last name"
                    helperText={<ErrorMessage name="lastname" />}
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
                  helperText={<ErrorMessage name="email" />}
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
                    helperText={<ErrorMessage name="address" />}
                  />
                </Stack>
                <Stack
                  spacing={2}
                  direction="row"
                  style={{ display: "flex", marginTop: 16 }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: 20, marginTop: 5 }}
                  >
                    <FormLabel component="legend" color="success">
                      Gender
                    </FormLabel>
                    <Field
                      as={RadioGroup}
                      aria-label="gender"
                      name="gender"
                      style={{ display: "inline-grid" }}
                    >
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
                    </Field>
                  </FormControl>
                  <FormHelperText>
                    <ErrorMessage name="gender" />
                  </FormHelperText>

                  <TextField
                    name="role"
                    label="Designation"
                    size="medium"
                    select
                    onChange={(event) => {
                      setShowInput(event.target.value === "doctor");
                    }}
                    color="success"
                    style={{ width: "250px", marginLeft: 60, marginTop: 16 }}
                    helperText={<ErrorMessage name="role" />}
                  >
                    <MenuItem value="doctor" label="doctor">
                      Doctor
                    </MenuItem>
                    <MenuItem value="user" label="user">
                      User
                    </MenuItem>
                  </TextField>
                </Stack>
                {showInput && (
                  <Field
                    as={TextField}
                    fullWidth
                    name="doctorLicenceNumber:"
                    label="Doctor Licence Number:"
                    color="success"
                    style={{ marginTop: 16 }}
                    placeholder="Enter Licence Number"
                    helperText={<ErrorMessage name="doctorLicenceNumber" />}
                  />
                )}
                <Field
                  as={TextField}
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  color="success"
                  style={{ marginTop: 16 }}
                  placeholder="Enter your phone number"
                  helperText={<ErrorMessage name="phoneNumber" />}
                />
                <Field
                  as={TextField}
                  fullWidth
                  name="password"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  color="success"
                  style={{ marginTop: 16 }}
                  placeholder="Enter your password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  helperText={<ErrorMessage name="password" />}
                />
                <Field
                  as={TextField}
                  fullWidth
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  label="Confirm Password"
                  color="success"
                  style={{ marginTop: 16 }}
                  placeholder="Confirm your password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  helperText={<ErrorMessage name="confirmPassword" />}
                />
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
                  <ErrorMessage name="termsAndConditions" />
                </FormHelperText>
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

export default Signup;
