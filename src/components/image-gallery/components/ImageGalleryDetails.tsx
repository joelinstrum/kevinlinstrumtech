import { IGalleries } from "types/gallery";

interface ImageGalleryDetailsProps {
  imageGallery: IGalleries;
}

const ImageGalleryDetails: React.FC<ImageGalleryDetailsProps> = ({
  imageGallery,
}) => <div>Image gallery intro</div>;

export default ImageGalleryDetails;
