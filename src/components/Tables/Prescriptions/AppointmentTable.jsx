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
import { Box } from "@mui/system";
function AppointmentTable() {
  const Cell = styled(TableCell)(({ theme }) => ({
    fontSize: "medium",
    fontWeight: "600",
    textAlign: "center",
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
                <Box
                  sx={{
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: "center",
                    alignItem: "center",
                  }}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{ m: 1 }}
                    href="/doctor/patient-details"
                  >
                    View
                  </Button>
                  <Button
                    variant="outlined"
                    color="success"
                    sx={{ m: 1 }}
                    href="/doctor/prescription"
                  >
                    Add Prescription
                  </Button>
                  <Button variant="outlined" color="warning" sx={{ m: 1 }}>
                    Mark as Complete
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AppointmentTable;
