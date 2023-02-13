import { IGallery } from "types/gallery";
import DetailsStyled from "./DetailsStyled";
import FirstImage from "./FirstImage";
import Thumbs from "./Thumbs";

interface ImageGalleryDetailsProps {
  imageGallery: IGallery;
}

const ImageGalleryDetails: React.FC<ImageGalleryDetailsProps> = ({
  imageGallery,
}) => (
  <DetailsStyled>
    <div>
      <FirstImage gallery={imageGallery} />
      <Thumbs imageGallery={imageGallery} />
    </div>
    <div>Right side</div>
  </DetailsStyled>
);

export default ImageGalleryDetails;
