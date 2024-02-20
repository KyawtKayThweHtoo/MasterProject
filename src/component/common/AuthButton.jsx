import { Box, Button, Divider } from "@mui/material";
import React, { useState } from "react";
import { FullFlex } from "./FullFlex";
import theme from "components/styles/theme";
import IModal from "./IModal";

import LoginForm from "./form/LoginForm";
import SignUpForm from "./form/SignUpForm";

const AuthButton = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  return (
    <>
      <FullFlex mr={3} gap={1}>
        <Button variant="text" onClick={() => setLoginOpen(true)}>
          Login
        </Button>
        <Divider orientation="vertical" flexItem />
        <Button variant="text" onClick={() => setSignUpOpen(true)}>
          Sign Up
        </Button>
      </FullFlex>
      <IModal open={loginOpen} handleClose={() => setLoginOpen(false)}>
        <LoginForm handleClose={() => setLoginOpen(false)} />
      </IModal>
      <IModal open={signUpOpen} handleClose={() => setSignUpOpen(false)}>
        <SignUpForm handleClose={() => setSignUpOpen(false)} />
      </IModal>
    </>
  );
};

export default AuthButton;
