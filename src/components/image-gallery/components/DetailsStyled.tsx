import { styled } from "@mui/system";

const DetailsStyled = styled("div")(({ theme }) => ({
  display: "flex",
  "& > div": {
    width: "50%",
  },
  "& > div:nth-of-type(1)": {
    marginRight: "50px",
    border: `1px solid ${theme.palette.secondary.variant}`,
    "& > img:nth-of-type(1)": {
      objectFit: "cover",
      width: "100%",
      height: "300px",
    },
  },
  "& > div:nth-of-type(2)": {
    color: theme.palette.secondary,
    "& h1": {
      padding: 0,
      margin: 0,
      fontSize: "18px",
    },
    "& table": {
      "& tr:nth-of-type(odd)": {
        backgroundColor: theme.palette.secondary.light,
      },
      "& tr > td:nth-of-type(1)": {
        textAlign: "right",
      },
      "& tr > td": {
        padding: "10px",
        minWidth: "200px",
      },
    },
  },
}));

export default DetailsStyled;
