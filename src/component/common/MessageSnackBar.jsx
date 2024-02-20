"use client";

import { Alert, Snackbar } from "@mui/material";
import { closeSnackBar } from "components/redux/appStore";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const MessageSnackBar = () => {
  const { isOpen, severity, message } = useSelector(
    (state) => state.app.messageSnackBar
  );
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(closeSnackBar());
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      onClose={(event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        dispatch(closeSnackBar());
      }}
    >
      <Alert
        variant="filled"
        onClose={handleClose}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MessageSnackBar;
