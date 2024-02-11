"use client";
import { Delete } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import AddToCartItem from "components/component/addToCart/AddToCartItem";
import { FullFlex } from "components/component/common/FullFlex";
import React from "react";

const AddToCartPage = () => {
  return (
    <FullFlex sx={{ mt: 4, gap: 1 }} alignItems={"flex-start"}>
      <Box flex={0.7}>
        <Card sx={{ p: 1, mb: 1 }}>
          <FullFlex>
            <Typography variant="h6">Order Detail Items</Typography>
            <Button variant="text" size="large">
              <Delete /> Delete All
            </Button>
          </FullFlex>
        </Card>
        <Card sx={{ p: 1, mb: 1 }}>
          <AddToCartItem />
          <AddToCartItem />
        </Card>
      </Box>
      <Box flex={0.3}>
        <Card sx={{ p: 1, mb: 1 }}>
          <FullFlex mb={2}>
            <Typography variant="h6">Order Summary</Typography>
          </FullFlex>
          <FullFlex mb={2}>
            <Typography>Subtotal</Typography>
            <Typography>KS</Typography>
          </FullFlex>
          <FullFlex>
            <Typography>Total</Typography>
            <Typography>KS</Typography>
          </FullFlex>
          <FullFlex flex={1} mt={2}>
            <Button variant="contained" fullWidth>
              Proceed to checkout
            </Button>
          </FullFlex>
        </Card>
      </Box>
    </FullFlex>
  );
};

export default AddToCartPage;
