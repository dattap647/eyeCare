import React from "react";
import Footer from "../../components/HomePage/Footer/Footer";

import Hero from "../../components/HomePage/Hero/Hero";
import Services from "../../components/HomePage/Service/Services";
import Specialities from "../../components/HomePage/Specialities/Specialities";
import Teams from "../../components/HomePage/Team/Teams";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Specialities />
      <Teams />
      <Footer />
    </>
  );
}

export default Home;
