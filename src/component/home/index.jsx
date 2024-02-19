"use client";
import React from "react";
import ICarousel from "./ICarousel";
import { Box } from "@mui/material";
import IAcceptPayment from "./IAcceptPayment";
import FeatureProduct from "./FeatureProduct";
import NewArrival from "./NewArrival";
import BestSeller from "./BestSeller";

const Home = () => {
  return (
    <Box>
      <ICarousel />
      <Box mx={5}>
        <IAcceptPayment />
        <FeatureProduct />
        <NewArrival />
        {/*<NewArrival />
  <BestSeller />*/}
      </Box>
    </Box>
  );
};

export default Home;
