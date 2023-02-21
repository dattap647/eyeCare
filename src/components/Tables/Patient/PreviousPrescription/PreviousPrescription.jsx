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
  Box,
  Link,
} from "@mui/material";

import prescriptions from "./previousPrescriptionlist";
import CustomButton from "../../../CustomButton/CustomButton";
function PreviousPrescription() {
  const Cell = styled(TableCell)(({ theme }) => ({
    fontSize: "medium",
    fontWeight: "600",
    textAlign: "start",
  }));
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "end", my: 2 }}>
        <Link href="/patient/booking" underline="none">
          <CustomButton
            color="white"
            backgroundColor="green"
            buttonText="Add Prescriptions"
          />
        </Link>
      </Box>
      <TableContainer
        sx={{ maxHeight: 340, border: "0.1px grey solid" }}
        component={Box}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <Cell>Date</Cell>
              <Cell>Name</Cell>
              <Cell>Created By</Cell>
              <Cell> Actions</Cell>
            </TableRow>
          </TableHead>

          <TableBody
            sx={{
              height: "max-content",
              textAlign: "left",
            }}
          >
            {prescriptions.map((ps) => (
              <TableRow>
                <TableCell>{ps.date}</TableCell>
                <TableCell>{ps.filename}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItem: "center",
                    }}
                  >
                    <Avatar src={ps.imgPath} />
                    <Typography marginLeft={1}>{ps.createdBy}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <a href="j" className="btn btn-sm bg-primary-light mx-2">
                    Print
                  </a>
                  <a href="jav" className="btn btn-sm bg-info-light mx-2">
                    View
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default PreviousPrescription;
