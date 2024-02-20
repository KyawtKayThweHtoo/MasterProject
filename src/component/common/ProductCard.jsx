import { Box, Button, Card, Drawer, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { FullFlex } from "./FullFlex";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import ProductDetail from "./ProductDetail";

export const ProductCard = ({ data }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  return (
    <Card variant="outlined" sx={{ backgroundColor: "white", m: 1 }}>
      <FullFlex justifyContent={"center"}>
        <Image
          src={data?.image}
          alt="iphone"
          width={300}
          height={100}
          objectFit="cover"
        />
      </FullFlex>
      <Box sx={{ p: 1 }}>
        <Typography variant="h6">{data?.name}</Typography>
        <FullFlex>
          <Typography variant="body2" color={theme.palette.primary.main}>
            Price: {data?.price}
          </Typography>
          <Button variant="text" onClick={() => setOpenDrawer(true)}>
            View Detail
          </Button>
        </FullFlex>
      </Box>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <ProductDetail onClose={() => setOpenDrawer(false)} id={data?.id} />
      </Drawer>
    </Card>
  );
};
