import React from "react";
import { FullFlex } from "./FullFlex";
import { Stack, Typography } from "@mui/material";

const VoucherProductItem = ({ data }) => {
  return (
    <FullFlex alignItems={"flex-start"} my={1}>
      <Stack flexDirection={"column"}>
        <Typography variant="h6">
          {data?.qty}x{data?.name}
        </Typography>
        <Typography variant="body1" sx={{ color: "gray" }}>
          {data?.storage},{data?.color}
        </Typography>
      </Stack>
      <Typography variant="body1" fontWeight={400}>
        {data?.qty * data?.price}
      </Typography>
    </FullFlex>
  );
};

export default VoucherProductItem;
