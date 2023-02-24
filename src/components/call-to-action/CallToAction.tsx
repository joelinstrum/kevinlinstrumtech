import { styled } from "@mui/system";

const CallToActionStyled = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50px",
  right: "50px",
  border: `5px solid ${theme.palette.callToAction.borderColor}`,
  background: theme.palette.callToAction.backgroundColor,
  borderRadius: "50%",
  height: "130px",
  width: "130px",
  zIndex: "150",
  cursor: "pointer",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  "& > div:nth-of-type(1)": {
    height: "100%",
    width: "100%",
    border: `1px solid ${theme.palette.callToAction.borderColorInterior}`,
    borderRadius: "100%",
    paddingTop: "25px",
    fontWeight: "bold",
    fontFamily: "Raleway",
  },
}));

const CallToAction = () => {
  return (
    <CallToActionStyled>
      <div>Get A Free Assessment</div>
    </CallToActionStyled>
  );
};

export default CallToAction;
