import { Link, Typography } from "@mui/material";
import React from "react";

function CopyRights() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      marginTop="49px"
    >
      {"Copyright © "}
      <Link color="inherit" href="https://eyecare.com" target="blank">
        EyeCareClinic
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default CopyRights;
