import { LockOutlined } from "@mui/icons-material";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
import * as Yup from "yup";

import React, { useState } from "react";

import doctor from "../../../assets/login.png";
import axios from "axios";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

import Navbar from "../../HomePage/Navbar/NavBar";
import Footer from "../../HomePage/Footer/Footer";
import { Box, Stack } from "@mui/system";

function SignIn() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (values, props) => {
    console.log("I'm xubmitted");

    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);

    try {
      setError("");
      setLoading(true);
      console.log(values);
      navigate("/patient/dashboard");
      // axios.post("", values).then((res) => {
      //   console.log(res);
      // });

      // navigate("/signin");
    } catch (error) {
      setError("Failed to create an account");
    }

    // //   useEffect(() => {
    // //     if (currentUser!== null){

    // //     }

    // //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // // }, [currentUser])
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
    marginRight: "150px",
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

      margin: "50px 5px 20px 5px",
    },
  }));
  const avatarStyle = { backgroundColor: "#5c6" };
  const btnstyle = {
    backgroundColor: "#5c6",
    margin: "8px 0",
    hover: {
      backgroundColor: "white",
      color: "#5c6",
      borderColor: "#5c6",
    },
  };

  return (
    <Box backgroundColor="#E6F0FF">
      <Navbar />
      <Grid display="inline-flex">
        <Stack direction="row">
          <ImageBox>
            <img src={doctor} alt="doctor" style={{ width: "90%" }} />
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
                    helperText={
                      <ErrorMessage
                        name="email"
                        component="div"
                        style={{ color: "red" }}
                      />
                    }
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
                    type="password"
                    autoComplete="current-password"
                    helperText={
                      <ErrorMessage
                        name="password"
                        component="div"
                        style={{ color: "red" }}
                      />
                    }
                  />

                  <Button
                    type="submit"
                    style={btnstyle}
                    variant="contained"
                    disabled={props.isSubmitting}
                  >
                    {props.isSubmitting ? "Loading..." : "Sign In"}
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
    </Box>
  );
}

export default SignIn;
