import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import ModalStyled, {
  ModalContentStyled,
  ModalStyledFooter,
} from "./ModalStyled";
import { closeModal } from "state/features/modalSlice";
import Portal from "./Portal";

interface ModalProps {
  title?: string;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children, title }) => {
  const dispatch = useDispatch();

  const onClickClose = (event?: React.MouseEvent) => {
    if (event) {
      if ((event.target as Element).classList.contains("modal-outer")) {
        dispatch(closeModal(""));
      } else {
        return;
      }
    }
  };

  const close = () => {
    dispatch(closeModal(""));
  };

  return (
    <Portal>
      <ModalStyled onClick={(e) => onClickClose(e)}>
        <ModalContentStyled>
          {title && <Typography>Modal Window</Typography>}
          {children}
          <ModalStyledFooter>
            <Link underline="hover" onClick={close}>
              Close
            </Link>
          </ModalStyledFooter>
        </ModalContentStyled>
      </ModalStyled>
    </Portal>
  );
};

export default Modal;
