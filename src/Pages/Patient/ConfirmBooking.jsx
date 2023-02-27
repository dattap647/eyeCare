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
  const { doc, datetime } = state.state;
  console.log(datetime);
  //SPLIT DATE AND TIME
  const date = datetime.split("T")[0];
  const time = datetime.split("T")[1];

  return (
    <Container>
      <Box
        justifyContent="center"
        width={400}
        height="50%"
        margin="8px auto"
        padding="8px auto"
      >
        <Card>
          <img src={tick} alt="tick" width="15%" style={{ margin: "8px" }} />
          <CardContent sx={{ my: 1 }}>
            <p>
              Appointment booked with <strong>{doc}</strong>
              <br></br> on <strong>{date}</strong>
              <br></br>at <strong>{time}</strong>
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
