import { TImage } from "types/image";
import ImagePopupStyled from "./components/ImagePopupStyled";
import ImageMain from "./components/ImageMain";
import ImageFooter from "./components/ImageFooter";

interface ImagePopupProps {
  gallery: TImage[];
  index: number;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ gallery, index }) => {
  return (
    <ImagePopupStyled>
      <ImageMain image={gallery[index]} />
      <ImageFooter size={gallery.length} />
    </ImagePopupStyled>
  );
};

export default ImagePopup;
