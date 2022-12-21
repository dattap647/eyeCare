import { CssBaseline, Grid } from "@mui/material";
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

        {/* <Box mt={6}>
                    <Copyright />
                </Box>        */}
      </div>
    </>
  );
}

export default Home;
