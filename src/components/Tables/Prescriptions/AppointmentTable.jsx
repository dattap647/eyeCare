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
function AppointmentTable() {
  const Cell = styled(TableCell)(({ theme }) => ({
    fontSize: "medium",
    fontWeight: "600",
    textAlign: "left",
  }));
  return (
    <TableContainer sx={{ maxHeight: 610 }} component={Paper}>
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
              <TableCell>
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

              <TableCell>
                <a
                  href="/doctor/patient-details"
                  className="btn btn-sm bg-primary-light mx-2"
                >
                  View
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AppointmentTable;
