import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import { FullFlex } from "./FullFlex";
import { AddCircle, Circle, Close, RemoveCircle } from "@mui/icons-material";
import Image from "next/image";

const ProductDetail = ({ onClose }) => {
  return (
    <Box
      sx={{
        py: 1,
        px: 4,
        width: 428,
      }}
    >
      <FullFlex>
        <Typography variant="h4">Product Detail</Typography>
        <IconButton onClick={() => onClose(false)}>
          <Close />
        </IconButton>
      </FullFlex>
      <Divider sx={{ my: 2 }} />
      <FullFlex justifyContent={"center"}>
        <Image
          src={"/images/apple.png"}
          alt="iphone"
          width={400}
          height={100}
          objectFit="cover"
        />
      </FullFlex>
      <FullFlex sx={{ my: 2 }} justifyContent={"center"}>
        <Typography variant="h5">IPhone 15 Pro Max</Typography>
      </FullFlex>

      <Typography variant="h6" fontWeight={600} sx={{ flex: 1 }}>
        Price
      </Typography>
      <Typography sx={{ flex: 1 }}>1000 Ks</Typography>

      <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
        Description
      </Typography>
      <Typography sx={{ flex: 1 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
      </Typography>
      <FullFlex>
        <Box>
          <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
            Color
          </Typography>
          <FullFlex justifyContent={"flex-start"} gap={1} flex={1}>
            <IconButton>
              <Circle sx={{ color: "red" }} />
            </IconButton>
            <IconButton>
              <Circle sx={{ color: "green" }} />
            </IconButton>
            <IconButton>
              <Circle sx={{ color: "blue" }} />
            </IconButton>
          </FullFlex>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
            Ram
          </Typography>
          <FullFlex justifyContent={"flex-start"} gap={1} flex={1}>
            <Button variant="outlined">64 GB</Button>
            <Button variant="outlined">128 GB</Button>
          </FullFlex>
        </Box>
      </FullFlex>
      <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
        Storage
      </Typography>
      <FullFlex justifyContent={"flex-start"} gap={1} flex={1}>
        <Button variant="outlined">128 GB</Button>
        <Button variant="outlined">256 GB</Button>
        <Button variant="outlined">512 GB</Button>
      </FullFlex>

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
        <Button variant="contained">Add to Cart</Button>
      </FullFlex>
    </Box>
  );
};

export default ProductDetail;
