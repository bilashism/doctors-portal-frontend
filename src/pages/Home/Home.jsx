import React from "react";
import useTitle from "../../hooks/useTitle";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";
import Banner from "./Banner";
import Contact from "./Contact";
import Header from "./Header";
import InfoCards from "./InfoCards";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Header />
      <InfoCards />
      <Services />
      <Banner />
      <AppointmentBanner />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
