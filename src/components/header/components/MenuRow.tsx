import {} from "constants";
import { styled } from "@mui/system";
import { company, menu } from "../../../constants";

const MenuRowStyled = styled("section")(({ theme }) => ({
  marginTop: "20px",
  marginBottom: "20px",
  "& > div:nth-of-type(1)": {
    display: "flex",
    "& > div:nth-of-type(1)": {
      [theme.breakpoints.up("md")]: {
        width: "40%",
      },
      "& > section": {
        "& h2": {
          fontFamily: "Market Deco",
          padding: 0,
          margin: 0,
          color: theme.palette.primary.main,
          fontSize: "2.5em",
          fontWeight: "bold",
          textTransform: "uppercase",
          lineHeight: "1em",
        },
      },
      "& > section h5": {
        padding: 0,
        margin: 0,
        color: theme.palette.secondary.main,
        fontSize: "1em",
        fontWeight: "bold",
        lineHeight: "1em",
        fontFamily: "Raleway",
      },
    },
    "& > div:nth-of-type(2)": {
      [theme.breakpoints.up("md")]: {
        width: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        "& ul": {
          listStyle: "none",
          display: "flex",
          margin: "0",
          padding: "0",
          "& li": {
            padding: "0",
            textTransform: "uppercase",
            color: theme.palette.header.menuItemsColor,
            fontSize: "15px",
            marginLeft: "40px",
            fontFamily: "Raleway",
          },
        },
      },
    },
  },
}));

const MenuRow = () => (
  <MenuRowStyled>
    <div>
      <div>
        <section>
          <h2>{company.NAME}</h2>
          <h5>{company.TAGLINE}</h5>
        </section>
      </div>
      <div>
        <ul>
          <li>{menu.HOME}</li>
          <li>{menu.SERVICES}</li>
          <li>{menu.PROJECTS}</li>
          <li>{menu.ABOUT}</li>
          <li>{menu.CONTACT}</li>
        </ul>
      </div>
    </div>
  </MenuRowStyled>
);

export default MenuRow;
