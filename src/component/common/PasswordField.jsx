"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import ITextField from "./ITextField";

const PasswordField = ({
  label = "Password",
  name = "password",
  id = "password",
  value,
  onChange,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <ITextField
      id={id}
      name={name}
      label={label}
      onChange={onChange}
      type={showPassword ? "text" : "password"}
      value={value}
      endAdornment={
        <IconButton onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      }
      error={error}
    />
  );
};

export default PasswordField;
