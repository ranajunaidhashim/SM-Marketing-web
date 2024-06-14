import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Pservices from "./Pservices";
import Services from "./Services";
import Testimonial from "./Testimonial"
const Homepage = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Pservices />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Homepage;
