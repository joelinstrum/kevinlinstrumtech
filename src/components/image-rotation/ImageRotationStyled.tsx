import { styled } from "@mui/system";

/*
titleColor: theme.rotationTitleColor,
      textColor: theme.rotationTextColor,
      rotationBackground: theme.rotationBackground,
      rotationBorderColor: theme.primaryColor
      */

const ImageRotationStyled = styled("div")(({ theme }) => ({
  position: "relative",
  height: "385px",
  "& > div:nth-of-type(1)": {
    position: "relative",
    "& > div > img": {
      position: "absolute",
      left: "0",
      top: "0",
      width: "100%",
      height: "350px",
      objectFit: "cover",
      overflow: "hidden",
    },
    "& > div > div:nth-of-type(1)": {
      position: "absolute",
      top: "80px",
      left: "20%",
      zIndex: "10",
      background: theme.palette.rotation.backgroundColor,
      color: theme.palette.rotation.titleColor,
      width: "300px",
      "& > div:nth-of-type(1)": {
        color: theme.palette.rotation.textColor,
        borderBottom: `1px solid ${theme.palette.rotation.borderColor}`,
        padding: "10px",
        fontSize: "24px",
        fontWeight: "bold",
      },
      "& > div:nth-of-type(2)": {
        color: theme.palette.rotation.textColor,
        padding: "10px",
        fontSize: "14px",
      },
    },
  },
}));

export default ImageRotationStyled;
