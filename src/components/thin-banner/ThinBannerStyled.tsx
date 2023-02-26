import { styled } from "@mui/system";

const ThinBannerStyled = styled("div")(({ theme }) => ({
  background: theme.palette.thinBanner.backgroundColor,
  color: theme.palette.thinBanner.fontColor,
  position: "relative",
  zIndex: "2000",
  "& > div > div:nth-of-type(1)": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    lineHeight: "0.75",
    "& > div:nth-of-type(1)": {
      alignItems: "center",
      display: "flex",
    },
    "& > div:nth-of-type(2)": {
      "& a": {
        color: theme.palette.thinBanner.linkColor,
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: "bold",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
    "& img": {
      maxHeight: "40px",
      marginRight: "10px",
    },

    fontFamily: "tahoma",
  },
}));

export default ThinBannerStyled;
