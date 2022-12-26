import { Alert, Button, Grid, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import usestyle from "./style";
function PatientForm() {
  const useStyle = usestyle();
  const initialValues = {
    specialization: "",
    doctor: "",
  };
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const status = "active";
  const [message, setMessage] = useState("");

  const validationSchema = Yup.object().shape({
    specialization: Yup.string().required("Please select a specialization"),
    doctor: Yup.string().required("Please select a doctor"),
  });

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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form style={useStyle.root}>
          <Grid container style={useStyle.container}>
            {error && (
              <Alert severity="error" sx={{ my: 1, width: "100%" }}>
                {error}
              </Alert>
            )}

            {message && (
              <Alert severity="success" sx={{ my: 1, width: "100%" }}>
                {message}
              </Alert>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Field
              as={TextField}
              variant="outlined"
              label="Name"
              name="name"
              id="name"
              select
              fullWidth
              helperText={<ErrorMessage name="name" />}
            ></Field>
            <Field
              as={TextField}
              variant="outlined"
              label="Category"
              name="category"
              id="category"
              select
              fullWidth
              helperText={<ErrorMessage name="cateory" />}
            />

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Button
                variant="contained"
                type="submit"
                style={useStyle.btnstyle}
                disabled={loading}
                sx={{ m: 2 }}
              >
                {loading ? "Loading..." : "Book Appointment"}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default PatientForm;
