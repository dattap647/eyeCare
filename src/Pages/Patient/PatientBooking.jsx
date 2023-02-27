import styled from "@emotion/styled";
import dayjs from "dayjs";

import {
  Button,
  Chip,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function PatientBooking() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    doctorSelection: "",
    datetime: "",
    phoneNumber: "",
    file: "",
  };
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const today = new Date();
  const nextMonth = new Date();
  nextMonth.setMonth(today.getMonth() + 1);

  const names = ["Dr. Chulbuli Pandey", "Dr. Ajay Dhagde", "Dr. Singh Jadhav"];

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "It's too short")
      .required("Firstname is Required"),
    lastName: Yup.string()
      .min(3, "It's too short")
      .required("Lastname is Required"),
    email: Yup.string().email("Enter valid email").optional(),
    phoneNumber: Yup.number()
      .typeError("Enter valid Phone Number")
      .required("Required"),
    doctorSelection: Yup.string().required("Select the Doctor"),
    datetime: Yup.string().required("Select the Appointment Date"),
  });

  const ChipBox = styled(Chip)(({ theme }) => ({
    fontSize: 14,
    margin: "5px",
    backgroundColor: "#5c6",
    border: "1px solid green",
    "&:hover": {
      backgroundColor: "white",
    },
  }));

  const handleSubmit = (values, props) => {
    // console.log(values.doctorSelection);
    // console.log(values.datetime);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);

    navigate("/patient/booking-confirmed", {
      state: {
        doc: values.doctorSelection,
        datetime: values.datetime,
      },
    });
  };

  return (
    <Container>
      <Grid container columnSpacing={2} rowSpacing={2}>
        <Grid item lg={7} md={12} sm={12} xs={12}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
            }}
          >
            <Typography variant="h5">Book Your Appointment</Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {(props) => (
                <Form>
                  <Stack direction="row" spacing={2} mt={2}>
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
                  <Stack direction="row" spacing={2} mt={2}>
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
                  </Stack>
                  <Stack
                    direction={{ sm: "column", md: "column", lg: "row" }}
                    spacing={{ xs: 2, sm: 3, md: 3, lg: 2 }}
                    my={2}
                  >
                    <FormControl fullWidth>
                      <Field
                        as={TextField}
                        fullWidth
                        color="success"
                        label="Select the Doctor "
                        name="doctorSelection"
                        select
                        helperText={
                          <ErrorMessage
                            component="div"
                            style={{ color: "red" }}
                            name="doctorSelection"
                          />
                        }
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            {name}
                          </MenuItem>
                        ))}
                      </Field>
                    </FormControl>

                    <FormControl fullWidth>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                          label="Appointment Timing"
                          disablePast="true"
                          maxDate={nextMonth}
                          minTime={dayjs("2022-02-14T09:00")}
                          maxTime={dayjs("2022-02-14T18:31")}
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                            props.setFieldValue(
                              "datetime",
                              dayjs(newValue).format("YYYY-MM-DDTHH:mm A")
                            );
                          }}
                          renderInput={(param) => (
                            <TextField
                              name="datetime"
                              color="success"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              {...param}
                              helperText={
                                <ErrorMessage
                                  component="div"
                                  style={{ color: "red" }}
                                  name="datetime"
                                />
                              }
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </FormControl>
                  </Stack>

                  <Stack
                    spacing={{ xs: 1, md: 1 }}
                    my={2}
                    justifyContent="start"
                    alignItems="start"
                  >
                    <label>Upload Medical Records</label>
                    <input name="file" type="file" />
                  </Stack>

                  <Button
                    type="submit"
                    variant="contained"
                    disabled={props.isSubmitting}
                    sx={{
                      backgroundColor: "#5c6",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "#5c6",
                        border: "2px solid #5c6",
                      },
                    }}
                  >
                    {props.isSubmitting ? "Loading" : "Book"}
                  </Button>
                </Form>
              )}
            </Formik>
          </Paper>
        </Grid>
        <Grid item lg={5} md={0}>
          <Paper elevation={5} sx={{ p: 2 }}>
            <Typography variant="h5" pt={2}>
              Available Slots
            </Typography>

            <Box>
              <Stack direction="row" spacing={2} justifyContent="space-between">
                <Stack>
                  <Typography>Today's</Typography>
                  <Box sx={{ flexWrap: "wrap" }}>
                    <ChipBox label="09:00 AM" />
                    <ChipBox label="09:30 AM" />
                    <ChipBox label="10:00 AM" />
                    <ChipBox label="10:30 AM" />
                    <ChipBox label="11:00 AM" />
                    <ChipBox label="12:00 PM" />
                    <ChipBox label="12:30 PM" />
                    <ChipBox label="01:00 PM" />
                    <ChipBox label="01:30 PM" />
                    <ChipBox label="04:30 PM" />
                    <ChipBox label="05:00 PM" />
                    <ChipBox label="05:30 PM" />
                    <ChipBox label="06:00 PM" />
                    <ChipBox label="06:30 PM" />
                  </Box>
                </Stack>
                <Stack>
                  <Typography>Tommarow's</Typography>
                  <Box>
                    <ChipBox label="09:00 AM" />
                    <ChipBox label="09:30 AM" />
                    <ChipBox label="10:00 AM" />
                    <ChipBox label="10:30 AM" />
                    <ChipBox label="11:00 AM" />
                    <ChipBox label="12:00 PM" />
                    <ChipBox label="12:30 PM" />
                    <ChipBox label="01:00 PM" />
                    <ChipBox label="01:30 PM" />
                    <ChipBox label="04:30 PM" />
                    <ChipBox label="05:00 PM" />
                    <ChipBox label="05:30 PM" />
                    <ChipBox label="06:00 PM" />
                    <ChipBox label="06:30 PM" />
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PatientBooking;
