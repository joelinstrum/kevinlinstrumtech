import { styled } from "@mui/system";

const HeaderStyled = styled("div")(({ theme }) => ({
  width: "100%",
  background: theme.palette.header.background,
  color: theme.palette.header.color,
  "& > div:nth-of-type(1)": {
    display: "flex",
    justifyContent: "space-between",
  },
  "& ul": {
    margin: "0",
    listStyle: "none",
    display: "flex",
    padding: "0",
    "& li": {
      padding: "10px",
      borderLeft: `1px solid ${theme.palette.header.headerBorderColor}`,
      color: theme.palette.header.fontColor,
      fontSize: "12px",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      fontFamily: "Raleway",
      "& span": {
        display: "inline-flex",
        paddingRight: "4px",
      },
    },
  },
}));

export default HeaderStyled;
