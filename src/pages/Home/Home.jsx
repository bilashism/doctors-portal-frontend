import React from "react";
import useTitle from "../../hooks/useTitle";
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
    </>
  );
};

export default Home;
