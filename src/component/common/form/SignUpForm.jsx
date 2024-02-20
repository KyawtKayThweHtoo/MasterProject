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
  registerUser,
  setIsLoggedIn,
  setLoggedInUserData,
} from "components/redux/appStore";

const SignUpForm = ({ handleClose }) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.app);
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    const validatedEmailExit = userData.find(
      (user) => user.username == data.username || user.email == data.email
    );
    if (validatedEmailExit) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: "User already exist",
        })
      );
    } else {
      const registerData = {
        id: userData.length + 1,
        username: data.username,
        email: data.email,
        password: data.password,
      };

      dispatch(registerUser(registerData));
      dispatch(setLoggedInUserData(registerData));
      dispatch(setIsLoggedIn(true));
      handleClose();
      dispatch(
        openSnackbar({
          severity: "success",
          message: "User register successfully",
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
          Sign Up
        </Typography>
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      </FullFlex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ my: 3 }}>
          <Controller
            control={control}
            name="username"
            render={({ field: { onChange, value } }) => (
              <ITextField
                value={value}
                onChange={onChange}
                label={"Username"}
                error={errors?.username?.message}
              />
            )}
            rules={{
              required: {
                value: true,
                message: "Field is required!",
              },
            }}
          />
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
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value } }) => (
              <PasswordField
                value={value}
                onChange={onChange}
                label="Confirm Password"
                error={errors?.confirmPassword?.message}
              />
            )}
            rules={{
              required: {
                value: true,
                message: "Field is required!",
              },
              validate: (value) => {
                const { password } = getValues();
                return password === value || "Passwords should match!";
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
            Sign Up
          </Button>
        </FullFlex>
      </form>
    </>
  );
};

export default SignUpForm;
