import { styled } from "@mui/system";

const DetailsStyled = styled("div")(() => ({
  display: "flex",
  "& > div": {
    width: "50%",
  },
  "& > div:nth-of-type(1)": {
    marginRight: "50px",
    border: "1px solid grey",
    "& > img:nth-of-type(1)": {
      objectFit: "cover",
      width: "100%",
      height: "300px",
    },
  },
}));

export default DetailsStyled;
