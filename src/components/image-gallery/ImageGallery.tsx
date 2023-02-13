import { useState, useEffect } from "react";
import { ImageGalleryThumbnails, ImageGalleryDetails } from "./components";
import { IGalleries } from "types/gallery";

interface ImageGalleryProps {
  imageGallery: IGalleries;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ imageGallery }) => {
  const [view, setView] = useState("thumbnails");

  const thumbClick = () => {
    setView("details");
  };

  return (
    <>
      {view === "thumbnails" && (
        <ImageGalleryThumbnails
          imageGallery={imageGallery}
          onClick={thumbClick}
        />
      )}
      {view === "details" && (
        <ImageGalleryDetails imageGallery={imageGallery} />
      )}
    </>
  );
};

export default ImageGallery;
