import { styled } from "@mui/system";

const ImagePopupStyled = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyItems: "center",
  alignItems: "center",
  "& img": {
    maxHeight: "400px",
    maxWidth: "900px",
  },
});

export const ImageFooterStyled = styled("div")(({ theme }) => ({
  "& ul": {
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
    padding: 0,
    margin: 0,
    "& li": {
      margin: "5px",
      borderRadius: "50%",
      border: `1px solid ${theme.palette.imagePopup.navBorder}`,
      width: "25px",
      height: "25px",
      cursor: "pointer",
      background: theme.palette.imagePopup.navBackground,
      "&:hover": {
        background: theme.palette.imagePopup.navHover,
      },
      "&.active": {
        background: theme.palette.imagePopup.navHover,
        border: `1px solid ${theme.palette.imagePopup.navHover}`,
      },
    },
  },
}));

export const ImageMainStyled = styled("div")(() => ({
  position: "relative",
  "& > div:nth-of-type(1)": {
    position: "absolute",
    bottom: "8px",
    left: "0",
    minHeight: "20px",
    background: "rgba(0, 0, 0, .8)",
    color: "white",
    fontSize: "11px",
    width: "100%",
    padding: "5px",
  },
}));

export default ImagePopupStyled;
