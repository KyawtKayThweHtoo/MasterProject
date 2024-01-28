"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";
import { carouselImages } from "components/utils/carouselImage";
import ICarousel from "./ICarousel";
import { Box, Stack, Typography } from "@mui/material";
import { FullFlex } from "../common/FullFlex";
import { LocalShippingOutlined, PaidOutlined } from "@mui/icons-material";
import IAcceptPayment from "./IAcceptPayment";
import FeatureProduct from "./FeatureProduct";

const Home = () => {
  return (
    <Box>
      <ICarousel />
      <Box mx={5}>
        <IAcceptPayment />
        <FeatureProduct />
      </Box>
    </Box>
  );
};

export default Home;
