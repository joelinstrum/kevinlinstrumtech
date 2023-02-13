import { styled } from "@mui/system";

const ThumbnailsStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  "& > div": {
    width: "280px",
    padding: "15px",
    border: `1px solid ${theme.palette.secondary.main}`,
    margin: "10px",
    marginLeft: "0px",
    marginRight: "20px",
    "& img": {
      width: "250px",
      height: "200px",
      objectFit: "cover",
      cursor: "pointer",
    },
  },
}));

export default ThumbnailsStyled;
