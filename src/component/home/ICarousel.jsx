import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";
import { carouselImages } from "components/utils/carouselImage";

const ICarousel = () => {
  return (
    <Carousel
      indicatorContainerProps={{
        style: {
          zIndex: 1,
          marginTop: "-60px",
          position: "relative",
        },
      }}
    >
      {carouselImages.map((item, i) => (
        <CarouselItem
          key={i}
          name={item.name}
          description={item.description}
          image={item.image}
        />
      ))}
    </Carousel>
  );
};

export default ICarousel;
