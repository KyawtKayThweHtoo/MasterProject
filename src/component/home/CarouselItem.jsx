import { Box, Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const CarouselItem = ({ image }) => {
  return (
    <Box>
      <Image
        src={image}
        alt={image}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "400px", objectFit: "cover" }}
      />
    </Box>
  );
};

export default CarouselItem;
