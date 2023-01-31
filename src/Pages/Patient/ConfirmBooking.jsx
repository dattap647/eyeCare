import {
  Box,
  Link,
  Card,
  CardActions,
  CardContent,
  Container,
} from "@mui/material";
import React from "react";
import tick from "../../assets/correct.png";
import { useLocation } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";

function ConfirmBooking() {
  //to access the dr and time for appointment
  const state = useLocation();

  return (
    <Container>
      <Box
        justifyContent="center"
        width={360}
        height="50%"
        margin="8px auto"
        padding="8px auto"
        bgImage="linear-gradient(to right, red , yellow)"
      >
        <Card>
          <CardContent>
            <img src={tick} alt="tick" width="15%" />
            <p>
              Appointment booked with <strong>{state.state.doc}</strong>
              <br></br> on <strong>{state.state.datetime}</strong>
            </p>
          </CardContent>
          <CardActions sx={{ display: "inline-block", my: 1 }}>
            <Link href="/patient/appointment" underline="none">
              <CustomButton
                buttonText="View Appointments"
                backgroundColor="#5c6"
                color="white"
              />
            </Link>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}

export default ConfirmBooking;
