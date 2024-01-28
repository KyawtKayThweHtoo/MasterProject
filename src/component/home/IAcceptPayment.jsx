import React from "react";
import { FullFlex } from "../common/FullFlex";
import { LocalShippingOutlined, PaidOutlined } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

const IAcceptPayment = () => {
  return (
    <FullFlex justifyContent={"center"} my={3} mx={5}>
      <FullFlex flex={0.5} justifyContent={"center"} gap={2}>
        <LocalShippingOutlined sx={{ fontSize: 40 }} />
        <Stack>
          <Typography variant="h6" fontWeight={600}>
            We Deliver
          </Typography>
          <Typography variant="body1">All over Myanmar</Typography>
        </Stack>
      </FullFlex>
      <FullFlex flex={0.5} justifyContent={"flex-start"} gap={2} pl={5}>
        <PaidOutlined sx={{ fontSize: 40 }} />
        <Stack>
          <Typography variant="h6" fontWeight={600}>
            We Accept
          </Typography>
          <Typography variant="body1">
            All type of mobile banking payment
          </Typography>
        </Stack>
      </FullFlex>
    </FullFlex>
  );
};

export default IAcceptPayment;
