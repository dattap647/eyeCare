import { Box, Container } from "@mui/material";
import React from "react";
import { useAuth } from "../../Context/Authcontext";
import Footer from "../HomePage/Footer/Footer";
import Navbar from "../HomePage/Navbar/NavBar";

function DashboardContent({ children, mainListItems }) {
  const { currentUser } = useAuth();
  return (
    <>
      <Navbar isAuth={currentUser} sideListItems={mainListItems} />
      <Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,

            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ my: 1 }}>
            <Box container>{children}</Box>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default function Dashboard({ children, mainListItems }) {
  return <DashboardContent children={children} mainListItems={mainListItems} />;
}
