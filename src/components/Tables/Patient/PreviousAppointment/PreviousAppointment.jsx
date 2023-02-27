import React from "react";
import {
  Avatar,
  Typography,
  styled,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";
import { Box } from "@mui/system";
import appointment from "./appointmentlist";

function PreviousAppointment() {
  const handleStatus = (msg) => {
    switch (msg) {
      case "Confirm":
        return <div className="btn btn-sm bg-success-light mx-2">{msg}</div>;

      case "Pending":
        return <div className="btn btn-sm bg-warning-light mx-2">{msg}</div>;

      case "Cancelled":
        return <div className="btn btn-sm bg-danger-light mx-2">{msg}</div>;

      default:
        return (
          <div className="btn btn-sm btn-secondary-light ">
            {"Status Pending"}
          </div>
        );
    }
  };
  const Cell = styled(TableCell)(({ theme }) => ({
    fontSize: "medium",
    fontWeight: "600",
    textAlign: "start",
  }));
  return (
    <TableContainer
      sx={{ maxHeight: 340, border: "0.1px grey solid" }}
      component={Box}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <Cell>Doctor</Cell>
            <Cell>Appointment Date</Cell>
            <Cell>Purpose</Cell>
            <Cell>Follow Up</Cell>
            <Cell> Status </Cell>
          </TableRow>
        </TableHead>

        <TableBody
          sx={{
            height: "max-content",
            textAlign: "start",
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

              <TableCell>{appt.folloup}</TableCell>
              <TableCell>{handleStatus(appt.status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PreviousAppointment;
