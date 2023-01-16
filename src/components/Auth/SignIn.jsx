import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Alert,
  Avatar,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import * as Yup from "yup";

import React, { useState } from "react";

import doctor from "../../assets/login.jpg";
import axios from "axios";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import Hero from "../HomePage/Hero/Hero";
import Navbar from "../HomePage/Navbar/NavBar";
import Footer from "../HomePage/Footer/Footer";
import { Box, Stack } from "@mui/system";

function SignIn() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
    showPassword: false,
  };

  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  // const history = useHistory();
  const handleSubmit = async (values, props) => {
    const { email, password, isVisible } = values;
    if (true) {
      setLoading(true);
      //conditional user rendering
      password == "doctor123" ? navigate("/doctor") : navigate("/patient");
    }

    // setTimeout(() => {
    //   props.resetForm();
    //   props.setSubmitting(false);
    // }, 2000);
    //change the url accordinglyy
    // // axios
    // //   .post("http://localhost:8080/api/login", { email, password })
    // //   .then((response) => {
    // //     if (response.data.success) {
    // //       setError("");
    // //       setLoading(true);
    // //       console.log(response.data);
    // //       //  localStorage.setItem('jwt', response.data.token);
    // //       // redirect to home/dashboard page
    // //       // history.push("/dashboard");
    // //     }
    // //   })
    //   .catch((error) => {
    //     setError("Failed to Sign In Enter the Correct Credential ");
    //   });

    setLoading(false);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Required"),
    password: Yup.string().required("Required"),
  });
  //Css for the components

  const textfieldStyle = {
    borderColor: "#56c595",
    margin: "6px 0",
    color: "#56c595",
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
  const avatarStyle = { backgroundColor: "#7BE495" };
  const btnstyle = { backgroundColor: "#56c596", margin: "8px 0" };

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
                <LockOutlined />
              </Avatar>
              <h2>Sign In</h2>
            </Grid>{" "}
            {error && (
              <Alert severity="error" sx={{ my: 1, width: "100%" }}>
                {error}
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
                    color="success"
                    required
                    style={textfieldStyle}
                    fullWidth
                    id="email"
                    label="Email Address"
                    placeholder="Enter Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    helperText={<ErrorMessage name="email" />}
                  />

                  <Field
                    as={TextField}
                    variant="outlined"
                    required
                    fullWidth
                    color="success"
                    style={textfieldStyle}
                    name="password"
                    label="Password"
                    placeholder="Enter Password"
                    id="password"
                    type={values.showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    helperText={<ErrorMessage name="password" />}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    type="submit"
                    style={btnstyle}
                    variant="contained"
                    disabled={loading}
                    // disabled={props.isSubmitting}
                  >
                    {loading ? "Loading..." : "Sign In"}
                  </Button>
                </Form>
              )}
            </Formik>
            <Typography>
              <Link style={{ color: red }} href="/forgotpassword">
                Forgot Your Credentials?
              </Link>
            </Typography>
            <Typography>
              Don't Have An Account? <Link href="/Signup">Sign Up</Link>
            </Typography>
          </PaperContainer>
        </Stack>
      </Grid>
      <Footer />
    </>
  );
}

export default SignIn;
