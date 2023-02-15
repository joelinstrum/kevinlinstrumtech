import { TImage } from "types/image";
import { ImageMainStyled } from "./ImagePopupStyled";

const ImageMain: React.FC<{ image: TImage }> = ({ image }) => (
  <ImageMainStyled>
    <img
      src={`${process.env.PUBLIC_URL}/assets/images/${image.src}`}
      alt={image.name}
    />
    {image.caption && <div>{image.caption}</div>}
  </ImageMainStyled>
);

export default ImageMain;
