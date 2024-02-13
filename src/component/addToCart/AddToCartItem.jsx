import React from "react";
import { FullFlex } from "../common/FullFlex";
import { Box, IconButton, Typography } from "@mui/material";
import { AddCircle, Delete, RemoveCircle } from "@mui/icons-material";
import Image from "next/image";
import theme from "components/styles/theme";
import { useDispatch } from "react-redux";
import {
  addCartProductQty,
  deleteCartProduct,
  removeCartProductQty,
} from "components/redux/appStore";

const AddToCartItem = ({ data }) => {
  console.log("data", data);
  const dispatch = useDispatch();
  return (
    <FullFlex gap={1} mb={1.5}>
      <Image
        src={data?.image}
        alt="iphone"
        width={100}
        height={100}
        objectFit="cover"
      />
      <FullFlex justifyContent={"center"} gap={1}>
        <Typography variant="body1">{data?.name + " "}</Typography>
        <Typography variant="body1" color={theme.palette.secondary.main}>
          ({data?.color})
        </Typography>
        <Typography variant="body1" color={theme.palette.primary.main}>
          ({data?.storage})
        </Typography>
      </FullFlex>
      <FullFlex justifyContent={"center"}>
        <Typography color={theme.palette.primary.main}>
          {data?.price} Ks
        </Typography>
      </FullFlex>
      <FullFlex justifyContent={"flex-start"}>
        <IconButton
          onClick={() => {
            data.qty > 1 && dispatch(removeCartProductQty(data));
          }}
        >
          <RemoveCircle />
        </IconButton>
        <Typography>{data?.qty}</Typography>
        <IconButton
          onClick={() => {
            dispatch(addCartProductQty(data));
          }}
        >
          <AddCircle />
        </IconButton>
      </FullFlex>
      <IconButton onClick={() => dispatch(deleteCartProduct(data))}>
        <Delete />
      </IconButton>
    </FullFlex>
  );
};

export default AddToCartItem;
