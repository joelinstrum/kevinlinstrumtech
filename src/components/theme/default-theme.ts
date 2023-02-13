// use this import to try different color palettes, then update the defaultTheme json below
import theme from "./themes/gold-grey-blue";

const defaultTheme = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          backgroundColor: theme.mainBackground,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: theme.secondaryColor,
          cursor: "pointer",
          "&:hover": {
            color: theme.primaryColor,
          },
        },
      },
    },
  },
  palette: {
    background: {
      default: theme.mainBackground,
    },
    header: {
      background: theme.headerBackground,
      color: theme.headerFontColor,
      linkColor: theme.headerLinkColor,
      headerBorderColor: theme.headerBorderColor,
      menuItemsColor: theme.menuItemsColor,
    },
    primary: {
      main: theme.primaryColor,
    },
    secondary: {
      main: theme.secondaryColor,
    },
    rotation: {
      titleColor: theme.rotationTitleColor,
      textColor: theme.rotationTextColor,
      backgroundColor: theme.rotationBackground,
      borderColor: theme.primaryColor,
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ].join(","),
  },
};

export { theme, defaultTheme };
