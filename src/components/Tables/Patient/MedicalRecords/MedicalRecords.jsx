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
import medicalRecordslist from "./medicalrecordlist";
import CustomButton from "../../../CustomButton/CustomButton";
function MedicalRecords() {
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
            backgroundColor="blue"
            buttonText="Add Medical Records"
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
              <Cell>Id</Cell>
              <Cell>Date</Cell>
              <Cell>Descriptions</Cell>
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
            {medicalRecordslist.map((ml) => (
              <TableRow>
                <TableCell>{ml.id}</TableCell>
                <TableCell>{ml.date}</TableCell>
                <TableCell>{ml.description}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItem: "center",
                    }}
                  >
                    <Avatar src={ml.imgPath} />
                    <Typography marginLeft={1}>{ml.createdBy}</Typography>
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

export default MedicalRecords;
