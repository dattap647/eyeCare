import React from "react";
import {
  Avatar,
  Button,
  Typography,
  styled,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";
import appointment from "./appointmentlist";
function UpcomingAppointmentTable() {
  const Cell = styled(TableCell)(({ theme }) => ({
    fontSize: "medium",
    fontWeight: "600",
    textAlign: "center",
  }));
  return (
    <TableContainer sx={{ maxHeight: 340 }} component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <Cell>Patient Name</Cell>
            <Cell>Appointment Schedule</Cell>
            <Cell>Purpose</Cell>
            <Cell> Actions </Cell>
          </TableRow>
        </TableHead>

        <TableBody
          sx={{
            height: "max-content",
            align: "center",
          }}
        >
          {appointment.map((appt) => (
            <TableRow>
              <TableCell align="center">
                <center>
                  <Avatar src={appt.imgPath} />
                </center>
                <Typography variant="subtitle1">{appt.name}</Typography>
              </TableCell>
              <TableCell>
                {appt.appdate}
                <Typography variant="subtitle2">{appt.apptime}</Typography>
              </TableCell>
              <TableCell>{appt.purpose}</TableCell>

              <TableCell align="center">
                <Button variant="outlined" color="primary" sx={{ m: 1 }}>
                  View
                </Button>
                <Button variant="outlined" color="success" sx={{ m: 1 }}>
                  Accept
                </Button>
                <Button variant="outlined" color="error" sx={{ m: 1 }}>
                  Cancel
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UpcomingAppointmentTable;
