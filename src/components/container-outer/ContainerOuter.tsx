import { FC } from "react";
import { styled } from "@mui/system";
import CSS from "csstype";

interface ContainerOuterStyledProps {
  children?: React.ReactNode;
  style?: CSS.Properties;
}

const ContainerOuterStyled = styled("div", {
  shouldForwardProp: (prop) => true,
})<ContainerOuterStyledProps>(({ style }) => ({
  ...{ width: "100%" },
  ...style,
  position: "relative",
}));

const ContainerOuter: FC<ContainerOuterStyledProps> = ({ children, style }) => (
  <ContainerOuterStyled style={style}>{children}</ContainerOuterStyled>
);

export default ContainerOuter;
