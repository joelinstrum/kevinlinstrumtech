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
      modalOuter: "rgba(0, 0, 0, .8)",
      modalInner: theme.secondaryLight,
    },
    header: {
      background: theme.headerBackground,
      color: theme.secondaryColor,
      linkColor: theme.secondaryColor,
      headerBorderColor: theme.secondaryLight,
      menuItemsColor: theme.secondaryDark,
    },
    primary: {
      main: theme.primaryColor,
    },
    secondary: {
      main: theme.secondaryColor,
      variant: theme.secondaryVariant,
      light: theme.secondaryLight,
    },
    modal: {
      text: "#eee",
      backgroundHover: "#eee",
    },
    rotation: {
      titleColor: theme.rotationTitleColor,
      textColor: theme.rotationTextColor,
      backgroundColor: theme.rotationBackground,
      borderColor: theme.primaryColor,
    },
    imagePopup: {
      navBorder: theme.tertiaryColor,
      navBackground: theme.tertiaryColorVariant,
      navHover: theme.tertiaryColorDark,
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
