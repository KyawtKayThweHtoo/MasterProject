import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { FullFlex } from "../common/FullFlex";
import Image from "next/image";

const BestSeller = () => {
  return (
    <Box>
      <Typography> Best Seller</Typography>
      <FullFlex gap={1}>
        <FullFlex flex={0.5}>
          <Box>
            <Image
              src={"/images/apple.png"}
              alt="image"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "50vw", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </FullFlex>
        <Stack flexDirection={"column"} flex={0.5} gap={2}>
          <Card sx={{ backgroundColor: "#e1e1e1" }}>
            <FullFlex>
              <Box>Apple</Box>
            </FullFlex>
          </Card>
          <Card>
            <FullFlex>Apple</FullFlex>
          </Card>
        </Stack>
      </FullFlex>
    </Box>
  );
};

export default BestSeller;
