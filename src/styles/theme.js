"use client";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { Open_Sans, Poppins } from "next/font/google";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const themeOptions = {
  typography: {
    fontSize: 12,
    fontFamily: openSans.style.fontFamily,
  },
  palette: {
    primary: {
      light: "#8CEFC9",
      main: "#43A047",
      dark: "#297A1D",
    },
    secondary: {
      main: "#FA7268",
      dark: "#3D3D3D",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
