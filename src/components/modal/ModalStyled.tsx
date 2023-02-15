import { styled, keyframes } from "@mui/system";

const fadeIn = keyframes`
  from { opacity: 0 };
  to { opacity: 1 };
`;

const ModalStyledOuter = styled("div")(({ theme }) => ({
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  zIndex: 1000,
  background: theme.palette.background.modalOuter,
  animation: `${fadeIn} .25s normal forwards ease-in`,
}));

interface ModalStyledProps {
  children?: React.ReactNode;
  onClick: (e?: React.MouseEvent) => void;
}

const ModalStyledInner = styled("div")(({ theme }) => ({
  top: "25%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  marginRight: "-50%",
  transform: "translate(-50%, -25%)",
  position: "fixed",
  background: theme.palette.background.modalInner,
  borderRadius: "5px",
}));

const ModalStyled: React.FC<ModalStyledProps> = ({ children, onClick }) => (
  <ModalStyledOuter onClick={onClick} className="modal-outer">
    <ModalStyledInner>{children}</ModalStyledInner>
  </ModalStyledOuter>
);

export const ModalContentStyled = styled("div")(({ theme }) => ({
  minWidth: "200px",
  "& .MuiTypography-root": {
    fontSize: 14,
    color: theme.palette.text.modalPrimary,
    fontWeight: "bold",
  },
}));

export const ModalStyledFooter = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default ModalStyled;
