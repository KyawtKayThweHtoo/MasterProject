import {
  Box,
  Button,
  Card,
  Drawer,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { FullFlex } from "./FullFlex";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import ProductDetail from "./ProductDetail";

export const ProductCard = () => {
  const [qty, setQty] = useState(1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  return (
    <Card variant="outlined" sx={{ backgroundColor: "white" }}>
      <Image
        src={"/images/apple.png"}
        alt="iphone"
        width={300}
        height={100}
        objectFit="cover"
      />
      <Box sx={{ p: 1 }}>
        <Typography variant="h6">IPhone 15 Pro Max</Typography>
        <FullFlex>
          <Typography variant="body2" color={theme.palette.primary.main}>
            Price: 3000
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
        <ProductDetail onClose={() => setOpenDrawer(false)} />
      </Drawer>
    </Card>
  );
};
