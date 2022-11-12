import React from "react";
import useTitle from "../../hooks/useTitle";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";
import Banner from "./Banner";
import Header from "./Header";
import InfoCards from "./InfoCards";
import Services from "./Services/Services";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Header />
      <InfoCards />
      <Services />
      <Banner />
      <AppointmentBanner />
    </>
  );
};

export default Home;
