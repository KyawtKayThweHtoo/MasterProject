import React, { useState } from "react";
import { FullFlex } from "../FullFlex";
import { Button, IconButton, Typography } from "@mui/material";

import { Close } from "@mui/icons-material";
import theme from "components/styles/theme";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const LoginCheckForm = ({ handleClose }) => {
  const [form, setForm] = useState(1);
  return (
    <>
      {form == 1 ? (
        <>
          <FullFlex>
            <Typography
              variant="h6"
              fontWeight={500}
              sx={{ color: theme.palette.primary.main }}
            >
              Welcome! Please Login to continue.
            </Typography>

            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </FullFlex>
          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{ my: 1 }}
            onClick={() => setForm(2)}
          >
            Login
          </Button>
          <FullFlex>
            <Typography
              variant="body1"
              fontWeight={500}
              sx={{ color: "lightblue" }}
            >
              new member? Register here
            </Typography>
          </FullFlex>
          <Button
            variant="outlined"
            fullWidth
            size="large"
            sx={{ my: 1 }}
            onClick={() => setForm(3)}
          >
            Register
          </Button>
        </>
      ) : form == 2 ? (
        <LoginForm handleClose={handleClose} />
      ) : (
        <SignUpForm handleClose={handleClose} />
      )}
    </>
  );
};

export default LoginCheckForm;
