"use client";
import React from "react";
import { FullFlex } from "./FullFlex";
import Image from "next/image";
import Link from "next/link";
import { Box, IconButton, Typography } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <FullFlex
      sx={{
        backgroundColor: "lightgrey",
        width: "100%",
        height: 60,
        px: 5,
      }}
    >
      <Typography variant="body1">
        ©2023 Jo March, All rights reserved
      </Typography>
      <Box>
        <IconButton>
          <Facebook />
        </IconButton>
        <IconButton>
          <Twitter />
        </IconButton>
        <IconButton>
          <Instagram />
        </IconButton>
        <IconButton>
          <LinkedIn />
        </IconButton>
      </Box>
    </FullFlex>
  );
};

export default Footer;
