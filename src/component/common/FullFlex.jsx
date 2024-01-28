import { Box, styled } from "@mui/material";

export const FullFlex = styled(Box)(
  ({ justifyContent = "space-between", alignItems = "center" }) => ({
    width: "100%",
    display: "flex",
    justifyContent: justifyContent,
    alignItems: alignItems,
  })
);
