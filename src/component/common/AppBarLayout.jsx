"use client";

import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

import { ShoppingCart } from "@mui/icons-material";
import { FullFlex } from "./FullFlex";
import Image from "next/image";
import ProfileHeading from "./ProfileHeading";
import { useRouter } from "next/navigation";

const AppBarLayout = () => {
  const router = useRouter();
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: `100%`,
          backgroundColor: "white",
        }}
        elevation={0}
      >
        <FullFlex>
          <Toolbar>
            <Image
              src={"/images/jmlogo.jpeg"}
              alt="logo"
              width={60}
              height={60}
            />
          </Toolbar>
          <FullFlex sx={{ width: "auto", gap: 2 }}>
            <IconButton onClick={() => router.push("/AddToCart")}>
              <Badge color="error" variant="standard" badgeContent={3}>
                <ShoppingCart />
              </Badge>
            </IconButton>
            <ProfileHeading />
          </FullFlex>
        </FullFlex>
      </AppBar>
    </>
  );
};

export default AppBarLayout;
