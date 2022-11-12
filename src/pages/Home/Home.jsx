import React from "react";
import useTitle from "../../hooks/useTitle";
import Header from "./Header";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Header />
    </>
  );
};

export default Home;
