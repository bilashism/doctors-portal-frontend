import React from "react";
import useTitle from "../../hooks/useTitle";
import Header from "./Header";
import InfoCards from "./InfoCards";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Header />
      <InfoCards />
    </>
  );
};

export default Home;
