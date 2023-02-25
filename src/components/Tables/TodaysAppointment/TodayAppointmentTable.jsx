import React from "react";
import {
  Avatar,
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
function TodayAppointmentTable() {
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
            textAlign: "center",
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
                <a
                  href="/doctor/patient-details"
                  className="btn btn-sm bg-primary-light mx-2"
                >
                  View
                </a>
                <a href="jav" className="btn btn-sm bg-success-light mx-2">
                  Accept
                </a>
                <a href="jav" className="btn btn-sm bg-danger-light mx-2">
                  Cancel
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TodayAppointmentTable;
