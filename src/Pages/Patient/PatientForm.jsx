import {
  Alert,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import usestyle from "./style";
function PatientForm() {
  const useStyle = usestyle();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const validationSchema = Yup.object().shape({
    specialization: Yup.string().required("Please select a specialization"),
    doctor: Yup.string().required("Please select a doctor"),
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  };

  const handleSubmit = (values, props) => {
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);

    try {
      setError("");
      setLoading(true);
      //   createNewAppointment(status);
      setMessage("Appointment successfuly Submitted");
    } catch (error) {
      setError("Failed to Submit Data");
    }

    setLoading(false);
  };

  return (
    <Container color="primary">
      <Grid container>
        <Grid item lg={9}>
          <Paper>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {(props) => (
                <Form>
                  <Stack direction="row" spacing={2}>
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
                          style={{ color: "red", margin: "0" }}
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

                  <Button
                    type="submit"
                    variant="contained"
                    disabled={props.isSubmitting}
                    color="primary"
                  >
                    {props.isSubmitting ? "Loading" : "Book"}
                  </Button>
                </Form>
              )}
            </Formik>
          </Paper>
        </Grid>
        <Grid item lg={3}>
          <Box bgcolor="primary">ye</Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PatientForm;
