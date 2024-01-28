import "./globals.css";
import ThemeRegistry from "../styles/ThemeRegistry";
import AppBarLayout from "components/component/common/AppBarLayout";
import { Box, CssBaseline } from "@mui/material";
import ReduxProvider from "components/component/common/ReduxProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <ThemeRegistry>
          <body>
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <AppBarLayout />

              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  p: 3,
                  mt: 5,
                }}
              >
                {children}
              </Box>
            </Box>
          </body>
        </ThemeRegistry>
      </ReduxProvider>
    </html>
  );
}
