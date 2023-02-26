import { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { defaultTheme } from "./default-theme";

interface ITheme {
  children?: React.ReactNode;
}

const Theme: FC<ITheme> = ({ children }) => {
  const theme = createTheme({
    ...defaultTheme,
    ...{
      MuiLink: {
        styleOverrides: {
          root: {
            cursor: "pointer",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
