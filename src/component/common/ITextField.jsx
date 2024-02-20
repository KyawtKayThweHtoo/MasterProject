import { InputAdornment, TextField } from "@mui/material";
import React from "react";

const ITextField = ({
  id,
  label,
  name,
  value,
  onChange,
  type = "text",
  isRequired = false,
  endAdornment = null,
  error = null,
}) => {
  return (
    <TextField
      error={!!error}
      id={id}
      label={label}
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      required={isRequired}
      variant="outlined"
      helperText={error}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ),
      }}
      sx={{ width: "100%", my: 1 }}
    />
  );
};

export default ITextField;
