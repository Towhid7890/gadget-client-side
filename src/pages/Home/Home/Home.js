import React from "react";
import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Extra from "../Extra/Extra";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <Extra></Extra>
      <Advertise></Advertise>
    </div>
  );
};

export default Home;
