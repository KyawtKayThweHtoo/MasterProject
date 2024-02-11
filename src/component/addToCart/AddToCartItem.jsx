import React from "react";
import { FullFlex } from "../common/FullFlex";
import { Box, IconButton, Typography } from "@mui/material";
import { AddCircle, Delete, RemoveCircle } from "@mui/icons-material";
import Image from "next/image";
import theme from "components/styles/theme";

const AddToCartItem = () => {
  return (
    <FullFlex gap={1} mb={1.5}>
      <Image
        src={"/images/apple.png"}
        alt="iphone"
        width={100}
        height={100}
        objectFit="cover"
      />
      <FullFlex justifyContent={"center"}>
        <Typography variant="body1">IPhone 15 Pro Max</Typography>
      </FullFlex>
      <FullFlex justifyContent={"center"}>
        <Typography color={theme.palette.primary.main}>1000 Ks</Typography>
      </FullFlex>
      <FullFlex justifyContent={"flex-start"}>
        <IconButton>
          <RemoveCircle />
        </IconButton>
        <Typography>2</Typography>
        <IconButton>
          <AddCircle />
        </IconButton>
      </FullFlex>
      <IconButton>
        <Delete />
      </IconButton>
    </FullFlex>
  );
};

export default AddToCartItem;
