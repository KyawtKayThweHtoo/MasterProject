import {
  Box,
  Button,
  Card,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { FullFlex } from "./FullFlex";
import { AddCircle, RemoveCircle } from "@mui/icons-material";

export const ProductCard = () => {
  const [qty, setQty] = useState(1);
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
        <Typography variant="body2" color={theme.palette.primary.main}>
          Price: 3000
        </Typography>
        <FullFlex>
          <Box>
            <FullFlex justifyContent={"flex-start"}>
              <IconButton>
                <RemoveCircle />
              </IconButton>
              <Typography>2</Typography>
              <IconButton>
                <AddCircle />
              </IconButton>
            </FullFlex>
          </Box>
          <Button variant="text">Add to Cart</Button>
        </FullFlex>
      </Box>
    </Card>
  );
};
