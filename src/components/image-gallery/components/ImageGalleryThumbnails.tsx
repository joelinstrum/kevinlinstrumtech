import { IGalleries, IGallery } from "types/gallery";
import ThumbnailsStyled from "./ThumbnailsStyled";
import FirstImage from "./FirstImage";

interface ImageGalleryThumbnailsProps {
  imageGallery: IGalleries;
  onClick: (gallery: IGallery) => void;
}

const ImageGalleryThumbnails: React.FC<ImageGalleryThumbnailsProps> = ({
  imageGallery,
  onClick,
}) => (
  <ThumbnailsStyled>
    {Object.keys(imageGallery).map((key: string) => (
      <div key={key} onClick={() => onClick(imageGallery[key])}>
        <FirstImage gallery={imageGallery[key]} />
        {imageGallery[key].name}
      </div>
    ))}
  </ThumbnailsStyled>
);

export default ImageGalleryThumbnails;
