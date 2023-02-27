import React from "react";
import icon1 from "../../assets/icon-01.png";
import icon2 from "../../assets/icon-02.png";
import icon3 from "../../assets/icon-03.png";
import dayjs from "dayjs";
import { Box, Typography, Paper, CardContent, Divider } from "@mui/material";
function Analysis() {
  const date = dayjs();
  const formattedDate = date.format("DD MMM YYYY");
  return (
    <Paper
      elevation={1}
      sx={{
        backgroundColor: "#E0FFE0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        py: 1,
        marginBottom: 2,
      }}
    >
      <Box>
        <img src={icon1} alt="icon1" />

        <CardContent>
          <Typography variant="h5"> Total Patients</Typography>
          <Typography variant="h6">1200</Typography>
          <Typography variant="body2">Till Today</Typography>
        </CardContent>
      </Box>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ backgroundColor: "black", my: 2 }}
      />
      <Box>
        <img src={icon2} alt="icon1" />
        <CardContent>
          <Typography variant="h5"> Today Patient</Typography>
          <Typography variant="h6">20</Typography>
          <Typography variant="body2">{formattedDate}</Typography>
        </CardContent>
      </Box>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ backgroundColor: "black", my: 2 }}
      />
      <Box>
        <img src={icon3} alt="icon1" />
        <CardContent>
          <Typography variant="h5"> Appointment</Typography>
          <Typography variant="h6">45</Typography>
          <Typography variant="body2">{formattedDate}</Typography>
        </CardContent>
      </Box>
    </Paper>
  );
}

export default Analysis;
