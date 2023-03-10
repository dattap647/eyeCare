import React from "react";
import { Navigate } from "react-router-dom";
import Welcome from "../../components/HomePage/Doctor/Welcom";
import Footer from "../../components/HomePage/Footer/Footer";

import Hero from "../../components/HomePage/Hero/Hero";
import Services from "../../components/HomePage/Service/Services";
import Specialities from "../../components/HomePage/Specialities/Specialities";
import Teams from "../../components/HomePage/Team/Teams";
import { useAuth } from "../../Context/Authcontext";

function Home() {
  const { currentUser } = useAuth();
  return currentUser === undefined ? (
    <Navigate to="/patient" />
  ) : (
    <>
      <Hero />
      <Welcome />
      <Services />
      <Specialities />
      <Teams />
      <Footer />
    </>
  );
}

export default Home;
