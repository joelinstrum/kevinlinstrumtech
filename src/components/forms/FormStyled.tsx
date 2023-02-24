import { styled } from "@mui/system";

const FormStyled = styled("form")(({ theme }) => ({
  color: theme.palette.primary.fontColor,
  marginTop: "25px",
  background: theme.palette.secondary.light,
  padding: "5px",
  border: `1px solid ${theme.palette.secondary.variant}`,
  borderRadius: "5px",
  "& > div": {
    display: "flex",
    alignItems: "center",
    color: theme.palette.primary.fontColor,
    "& > div:nth-of-type(1)": {
      marginRight: "10px",
      textAlign: "right",
      minWidth: "150px",
      fontSize: "12px",
    },
    "& > div:nth-of-type(2)": {
      "& > span": {
        fontSize: "12px",
        color: "red",
        marginLeft: "5px",
      },
    },
  },
}));

export default FormStyled;
