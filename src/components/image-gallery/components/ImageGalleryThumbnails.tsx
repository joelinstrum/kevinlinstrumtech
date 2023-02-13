import { IGalleries } from "types/gallery";
import ThumbnailsStyled from "./ThumbnailsStyled";
import { IGallery } from "types/gallery";

interface ImageGalleryThumbnailsProps {
  imageGallery: IGalleries;
  onClick: () => void;
}

const FirstImage: React.FC<{ gallery: IGallery }> = ({ gallery }) => {
  const image = gallery.galleryImages[0];
  return (
    <img
      src={`${process.env.PUBLIC_URL}/assets/images/${image.src}`}
      alt={image.name}
    />
  );
};

const ImageGalleryThumbnails: React.FC<ImageGalleryThumbnailsProps> = ({
  imageGallery,
  onClick,
}) => (
  <ThumbnailsStyled>
    {Object.keys(imageGallery).map((key: string) => (
      <div key={key} onClick={onClick}>
        <FirstImage gallery={imageGallery[key]} />
        {imageGallery[key].name}
      </div>
    ))}
  </ThumbnailsStyled>
);

export default ImageGalleryThumbnails;
