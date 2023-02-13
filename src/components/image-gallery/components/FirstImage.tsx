import { IGallery } from "types/gallery";

const FirstImage: React.FC<{ gallery: IGallery }> = ({ gallery }) => {
  const image = gallery.galleryImages[0];
  return (
    <img
      src={`${process.env.PUBLIC_URL}/assets/images/${image.src}`}
      alt={image.name}
    />
  );
};

export default FirstImage;
