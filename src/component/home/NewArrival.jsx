import React from "react";
import { FullFlex } from "../common/FullFlex";
import { Box, Card, Typography } from "@mui/material";
import { ProductCard } from "../common/ProductCard";
import { arrivalData } from "components/utils/productData";

const NewArrival = () => {
  return (
    <Card sx={{ backgroundColor: "#e1e1e1", py: 3, px: 3 }}>
      <FullFlex>
        <Box flex={0.13}>
          <Typography variant="h4" color={"white"} fontWeight={600}>
            New At Jo March
          </Typography>
        </Box>
        <Card sx={{ p: 2, flex: 0.8 }}>
          <FullFlex justifyContent={"flex-start"} gap={2}>
            {arrivalData.map((data, index) => (
              <ProductCard data={data} key={index} />
            ))}
          </FullFlex>
        </Card>
      </FullFlex>
    </Card>
  );
};

export default NewArrival;
