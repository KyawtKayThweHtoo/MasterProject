import React from "react";
import { FullFlex } from "../FullFlex";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import theme from "components/styles/theme";
import ITextField from "../ITextField";
import PasswordField from "../PasswordField";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { validateEmail } from "components/utils/validateEmail";
import {
  openSnackbar,
  setIsLoggedIn,
  setLoggedInUserData,
} from "components/redux/appStore";

const LoginForm = ({ handleClose }) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.app);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    const validateEmail = userData.find(
      (user) => user.email == data.email && user.password == data.password
    );

    if (validateEmail) {
      dispatch(setIsLoggedIn(true));
      dispatch(setLoggedInUserData(validateEmail));
      handleClose();
      dispatch(
        openSnackbar({
          severity: "success",
          message: "Login successful",
        })
      );
    } else {
      console.log("login failed");
      dispatch(
        openSnackbar({
          severity: "error",
          message: "Invalid email or password",
        })
      );
    }
  };

  return (
    <>
      <FullFlex>
        <Typography
          variant="h5"
          fontWeight={500}
          sx={{ color: theme.palette.primary.main }}
        >
          Login
        </Typography>
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      </FullFlex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ my: 3 }}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <ITextField
                value={value}
                onChange={onChange}
                label={"Email"}
                error={errors?.email?.message}
              />
            )}
            rules={{
              required: {
                value: true,
                message: "Field is required!",
              },
              validate: validateEmail,
            }}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <PasswordField
                value={value}
                onChange={onChange}
                label="Password"
                error={errors?.password?.message}
              />
            )}
            rules={{
              required: {
                value: true,
                message: "Field is required!",
              },
              minLength: {
                value: 6,
                message: "Password length should be at least 6 characters",
              },
            }}
          />
        </Box>
        <FullFlex gap={2}>
          <Button
            variant="outlined"
            fullWidth
            size="large"
            sx={{ my: 1 }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{ my: 1 }}
            type="submit"
          >
            Login
          </Button>
        </FullFlex>
      </form>
    </>
  );
};

export default LoginForm;
