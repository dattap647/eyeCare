import { Button, Container, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import notFound from "../../assets/404.gif";
import useStyle from "./style";
function PageNotFound() {
  const navigate = useNavigate();
  const usestyle = useStyle();
  return (
    <Container style={usestyle.Container}>
      <Paper elevation={8} style={usestyle.paperContent}>
        <Typography variant="h4">Page Not Found !</Typography>
        <div style={usestyle.imgContainer}>
          <img style={usestyle.img} src={notFound} alt="Page Not found" />
        </div>
        <Button
          variant="contained"
          onClick={() => navigate(-1)}
          style={usestyle.btnstyle}
        >
          Go Back
        </Button>
      </Paper>
    </Container>
  );
}

export default PageNotFound;
