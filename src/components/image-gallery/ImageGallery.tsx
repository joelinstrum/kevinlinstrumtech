import { useState } from "react";
import { ImageGalleryThumbnails, ImageGalleryDetails } from "./components";
import { IGalleries, IGallery } from "types/gallery";

interface ImageGalleryProps {
  imageGalleries: IGalleries;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ imageGalleries }) => {
  const [view, setView] = useState("thumbnails");
  const [currentGallery, setCurentGallery] = useState<IGallery | null>(null);

  const thumbClick = (imageGallery: IGallery) => {
    setCurentGallery(imageGallery);
    setView("details");
  };

  const showThumbnails = () => {
    setView("thumbnails");
  };

  return (
    <>
      {view === "thumbnails" && (
        <ImageGalleryThumbnails
          imageGallery={imageGalleries}
          onClick={thumbClick}
        />
      )}
      {view === "details" && currentGallery && (
        <ImageGalleryDetails
          imageGallery={currentGallery}
          returnClick={showThumbnails}
        />
      )}
    </>
  );
};

export default ImageGallery;
