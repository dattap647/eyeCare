import { Grid } from "@mui/material";
import React from "react";
import SignIn from "../../components/Auth/SignIn";

function Home() {
  return (
    <>
      <div>
        <Grid container component="main">
          <Grid item xs={12}>
            <SignIn />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;
