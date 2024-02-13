"use client";
import { Delete } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import AddToCartItem from "components/component/addToCart/AddToCartItem";
import { FullFlex } from "components/component/common/FullFlex";
import { emptyCart } from "components/redux/appStore";
import { calculateTotal } from "components/utils/calculateTotal";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AddToCartPage = () => {
  const dispatch = useDispatch();
  const { cartProduct } = useSelector((state) => state.app);
  const total = calculateTotal(cartProduct);

  return (
    <>
      {cartProduct.length && (
        <FullFlex sx={{ mt: 4, gap: 1 }} alignItems={"flex-start"}>
          <Box flex={0.7}>
            <Card sx={{ p: 1, mb: 1 }}>
              <FullFlex>
                <Typography variant="h6">Order Detail Items</Typography>
                <Button
                  variant="text"
                  size="large"
                  onClick={() => dispatch(emptyCart())}
                >
                  <Box>
                    <Delete /> Delete All
                  </Box>
                </Button>
              </FullFlex>
            </Card>
            <Card sx={{ p: 1, mb: 1 }}>
              {cartProduct.map((data, index) => (
                <AddToCartItem key={index} data={data} />
              ))}
            </Card>
          </Box>
          <Box flex={0.3}>
            <Card sx={{ p: 1, mb: 1 }}>
              <FullFlex mb={2}>
                <Typography variant="h6">Order Summary</Typography>
              </FullFlex>
              <FullFlex mb={2}>
                <Typography>Subtotal</Typography>
                <Typography>{total} KS</Typography>
              </FullFlex>
              <FullFlex>
                <Typography>Total</Typography>
                <Typography>{total} KS</Typography>
              </FullFlex>
              <FullFlex flex={1} mt={2}>
                <Button variant="contained" fullWidth>
                  Proceed to checkout
                </Button>
              </FullFlex>
            </Card>
          </Box>
        </FullFlex>
      )}
    </>
  );
};

export default AddToCartPage;
