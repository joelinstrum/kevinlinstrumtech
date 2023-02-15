import { IGallery } from "types/gallery";
import DetailsStyled from "./DetailsStyled";
import FirstImage from "./FirstImage";
import Thumbs from "./Thumbs";
import { Spacer } from "components";

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
    <div>
      <h1>Brief Description</h1>
      {imageGallery.description}
      <Spacer height="30" />
      <h1>At A Glance</h1>
      <section>
        <table>
          <tbody>
            {imageGallery?.name && (
              <tr>
                <td>Project:</td>
                <td>{imageGallery.name}</td>
              </tr>
            )}
            {imageGallery?.type && (
              <tr>
                <td>Project Type:</td>
                <td>{imageGallery.type}</td>
              </tr>
            )}
            {imageGallery?.location && (
              <tr>
                <td>Location:</td>
                <td>{imageGallery.location}</td>
              </tr>
            )}
            {imageGallery?.date && (
              <tr>
                <td>Date:</td>
                <td>{imageGallery.date}</td>
              </tr>
            )}
            {imageGallery?.value && (
              <tr>
                <td>Contract Value:</td>
                <td>{imageGallery.value}</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  </DetailsStyled>
);

export default ImageGalleryDetails;
