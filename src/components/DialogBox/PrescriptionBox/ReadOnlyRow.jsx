import React from "react";
import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
function ReadOnlyRow({ data, handleEditClick }) {
  return (
    <TableRow>
      <TableCell>{data.medicineName}</TableCell>
      <TableCell>{data.quantity}</TableCell>
      <TableCell>{data.days}</TableCell>
      <TableCell align="left">
        <Box
          display="flex"
          justifyContent="start"
          alignItems="start
    "
        >
          {data.morning ? (
            <Typography marginRight={1}>Morning</Typography>
          ) : null}
          {data.afternoon ? (
            <Typography marginRight={1}>Afternoon</Typography>
          ) : null}
          {data.evening ? (
            <Typography marginRight={1}>Evening</Typography>
          ) : null}
          {data.night ? <Typography marginRight={1}>Night</Typography> : null}
        </Box>
      </TableCell>
      <TableCell>
        <IconButton color="success" onClick={(e) => handleEditClick(e, data)}>
          <Edit />
        </IconButton>
        <IconButton color="error">
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default ReadOnlyRow;
