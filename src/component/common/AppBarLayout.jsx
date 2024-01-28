"use client";

import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

import { Notifications } from "@mui/icons-material";
import { FullFlex } from "./FullFlex";

const AppBarLayout = () => {
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
            <Typography
              variant="h6"
              noWrap
              component="div"
              //   sx={{ color: theme.palette.primary.dark }}
            >
              Apple
            </Typography>
          </Toolbar>
          <FullFlex sx={{ width: "auto" }}>
            <IconButton>
              <Notifications />
            </IconButton>
          </FullFlex>
        </FullFlex>
      </AppBar>
    </>
  );
};

export default AppBarLayout;
