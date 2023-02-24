import { styled } from "@mui/system";

export const ContactCardStyled = styled("div")(({ theme }) => ({
  marginTop: "20px",
  marginRight: "20px",
  padding: "10px",
  borderRadius: "5px",
  textAlign: "center",
  width: "250px",
  border: `1px solid ${theme.palette.secondary.light}`,
  cursor: "pointer",
  "&:hover": {
    border: `1px solid ${theme.palette.primary.main}`,
  },
  "& div:nth-of-type(1)": {
    fontSize: "20px",
    fontFamily: "Raleway",
  },
}));

const ContactStyled = styled("div")(() => ({
  display: "flex",
  "& img": {
    height: "200px",
  },
  "& > div:nth-of-type(2)": {
    fontSize: "20px",
    width: "50px",
    textAlign: "center",
    alignSelf: "center",
    marginRight: "20px",
    fontWeight: "bold",
  },
}));

export default ContactStyled;
