import React from "react";
import Add from "../../Add/Add";
import Intro from "../../Intro/Intro";
import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Extra from "../Extra/Extra";
import Faq from "../Faq/Faq";
import Stack from "../Stack";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Add></Add>
      <Categories></Categories>
      <Intro></Intro>
      <Stack></Stack>
      <Advertise></Advertise>
      <Extra></Extra>
      <Faq></Faq>
    </div>
  );
};

export default Home;
